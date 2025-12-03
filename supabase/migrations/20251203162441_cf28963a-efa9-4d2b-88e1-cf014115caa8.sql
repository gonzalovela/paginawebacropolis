-- Add sede_id to profiles table to associate users with sedes
ALTER TABLE public.profiles 
ADD COLUMN sede_id uuid REFERENCES public.sedes(id) ON DELETE SET NULL;

-- Create index for better query performance
CREATE INDEX idx_profiles_sede_id ON public.profiles(sede_id);

-- Add policy for admins to update any profile's sede
DROP POLICY IF EXISTS "Admins can update any profile" ON public.profiles;
CREATE POLICY "Admins can update any profile" 
ON public.profiles 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));