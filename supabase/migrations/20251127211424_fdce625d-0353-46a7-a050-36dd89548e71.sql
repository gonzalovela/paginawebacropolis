-- Drop the existing ALL policy and create separate granular policies
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;

-- Create separate INSERT policy for admins
CREATE POLICY "Admins can insert roles" 
ON public.user_roles 
FOR INSERT 
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create separate UPDATE policy for admins
CREATE POLICY "Admins can update roles" 
ON public.user_roles 
FOR UPDATE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create separate DELETE policy for admins
CREATE POLICY "Admins can delete roles" 
ON public.user_roles 
FOR DELETE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));