-- Add alt_text column to cultura_actividades for SEO
ALTER TABLE public.cultura_actividades 
ADD COLUMN IF NOT EXISTS alt_text text;

-- Add alt_text column to voluntariado_programas for SEO  
ALTER TABLE public.voluntariado_programas 
ADD COLUMN IF NOT EXISTS alt_text text;

-- Set default alt_text values based on existing titles
UPDATE public.cultura_actividades 
SET alt_text = titulo || ' - Actividad cultural Nueva Acrópolis Perú'
WHERE alt_text IS NULL;

UPDATE public.voluntariado_programas 
SET alt_text = titulo || ' - Programa de voluntariado Nueva Acrópolis Perú'
WHERE alt_text IS NULL;