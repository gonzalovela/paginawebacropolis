-- Add sede_id column to voluntariado_fotos table
ALTER TABLE public.voluntariado_fotos
ADD COLUMN sede_id uuid REFERENCES public.sedes(id) ON DELETE SET NULL;

-- Add index for better query performance
CREATE INDEX idx_voluntariado_fotos_sede_id ON public.voluntariado_fotos(sede_id);