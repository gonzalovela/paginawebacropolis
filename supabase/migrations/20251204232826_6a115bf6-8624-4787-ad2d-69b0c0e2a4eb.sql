-- =====================================================
-- CULTURA_ACTIVIDADES: Only admin and content_manager
-- =====================================================

-- Drop existing editor-inclusive policies
DROP POLICY IF EXISTS "Admins and editors can insert cultura activities" ON public.cultura_actividades;
DROP POLICY IF EXISTS "Admins and editors can update cultura activities" ON public.cultura_actividades;
DROP POLICY IF EXISTS "Admins and editors can delete cultura activities" ON public.cultura_actividades;

-- Create new policies for admin and content_manager only
CREATE POLICY "Admins and content managers can insert cultura activities"
ON public.cultura_actividades
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'content_manager'::app_role));

CREATE POLICY "Admins and content managers can update cultura activities"
ON public.cultura_actividades
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'content_manager'::app_role));

CREATE POLICY "Admins and content managers can delete cultura activities"
ON public.cultura_actividades
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'content_manager'::app_role));

-- =====================================================
-- VOLUNTARIADO_PROGRAMAS: Only admin and content_manager
-- =====================================================

-- Drop existing editor-inclusive policies
DROP POLICY IF EXISTS "Admins and editors can insert voluntariado programs" ON public.voluntariado_programas;
DROP POLICY IF EXISTS "Admins and editors can update voluntariado programs" ON public.voluntariado_programas;
DROP POLICY IF EXISTS "Admins and editors can delete voluntariado programs" ON public.voluntariado_programas;

-- Create new policies for admin and content_manager only
CREATE POLICY "Admins and content managers can insert voluntariado programs"
ON public.voluntariado_programas
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'content_manager'::app_role));

CREATE POLICY "Admins and content managers can update voluntariado programs"
ON public.voluntariado_programas
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'content_manager'::app_role));

CREATE POLICY "Admins and content managers can delete voluntariado programs"
ON public.voluntariado_programas
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'content_manager'::app_role));

-- =====================================================
-- VOLUNTARIADO_FOTOS: admin, content_manager AND editor
-- =====================================================

-- Drop existing policies
DROP POLICY IF EXISTS "Admins and editors can insert photos" ON public.voluntariado_fotos;
DROP POLICY IF EXISTS "Admins and editors can update photos" ON public.voluntariado_fotos;
DROP POLICY IF EXISTS "Admins and editors can delete photos" ON public.voluntariado_fotos;

-- Create new policies including content_manager
CREATE POLICY "Authorized users can insert photos"
ON public.voluntariado_fotos
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'content_manager'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Authorized users can update photos"
ON public.voluntariado_fotos
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'content_manager'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Authorized users can delete photos"
ON public.voluntariado_fotos
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'content_manager'::app_role) OR has_role(auth.uid(), 'editor'::app_role));