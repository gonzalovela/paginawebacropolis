-- Add imagen_position column to voluntariado_programas
ALTER TABLE public.voluntariado_programas 
ADD COLUMN IF NOT EXISTS imagen_position text DEFAULT 'center';