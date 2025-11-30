-- Fix overly permissive RLS policy for invitations
-- Drop the problematic policy that allows anyone to see ALL invitations
DROP POLICY IF EXISTS "Anyone can view invitations by token" ON public.invitations;

-- Create a function to check invitation by token (bypasses RLS)
CREATE OR REPLACE FUNCTION public.get_invitation_by_token(invitation_token uuid)
RETURNS TABLE (
  id uuid,
  email text,
  role app_role,
  status text,
  expires_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id, email, role, status, expires_at
  FROM public.invitations
  WHERE token = invitation_token
    AND status = 'pending'
  LIMIT 1;
$$;