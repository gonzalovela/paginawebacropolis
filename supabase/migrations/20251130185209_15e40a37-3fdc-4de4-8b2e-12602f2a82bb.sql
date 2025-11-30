-- Fix: Add admin SELECT policy for profiles to allow user management
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Fix: Add DELETE policy for inscripciones (admins only)
CREATE POLICY "Admins can delete inscripciones" 
ON public.inscripciones 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Fix: Add UPDATE policy for inscripciones (admins only)
CREATE POLICY "Admins can update inscripciones" 
ON public.inscripciones 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));