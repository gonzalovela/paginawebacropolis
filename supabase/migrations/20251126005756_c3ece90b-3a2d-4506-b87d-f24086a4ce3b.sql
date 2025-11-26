-- Update the categoria column to use specific program names
ALTER TABLE public.voluntariado_fotos 
DROP CONSTRAINT IF EXISTS voluntariado_fotos_categoria_check;

-- Add comment to document the valid categories
COMMENT ON COLUMN public.voluntariado_fotos.categoria IS 'Valid values: yo_amo_lectura, adulto_mayor, humanitario_social, medio_ambiente, formacion_voluntarios, talleres_artisticos';
