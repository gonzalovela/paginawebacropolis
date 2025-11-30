-- Create invitations table to track pending invitations
CREATE TABLE public.invitations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  role app_role NOT NULL DEFAULT 'editor',
  invited_by UUID REFERENCES auth.users(id),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'expired')),
  token UUID NOT NULL DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + INTERVAL '7 days'),
  UNIQUE(email, status)
);

-- Add status field to profiles for suspend functionality
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'suspended'));

-- Enable RLS on invitations
ALTER TABLE public.invitations ENABLE ROW LEVEL SECURITY;

-- Only admins can manage invitations
CREATE POLICY "Admins can view invitations"
ON public.invitations
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can create invitations"
ON public.invitations
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update invitations"
ON public.invitations
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete invitations"
ON public.invitations
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to update profiles (for suspend functionality)
CREATE POLICY "Admins can update any profile"
ON public.profiles
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Function to handle invitation acceptance
CREATE OR REPLACE FUNCTION public.handle_invitation_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  invitation_record RECORD;
BEGIN
  -- Check if there's a pending invitation for this email
  SELECT * INTO invitation_record
  FROM public.invitations
  WHERE email = NEW.email
    AND status = 'pending'
    AND expires_at > now()
  LIMIT 1;
  
  IF invitation_record.id IS NOT NULL THEN
    -- Update user role to match invitation
    DELETE FROM public.user_roles WHERE user_id = NEW.id;
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, invitation_record.role);
    
    -- Mark invitation as accepted
    UPDATE public.invitations
    SET status = 'accepted'
    WHERE id = invitation_record.id;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger to process invitations on signup
DROP TRIGGER IF EXISTS on_auth_user_created_invitation ON auth.users;
CREATE TRIGGER on_auth_user_created_invitation
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_invitation_signup();