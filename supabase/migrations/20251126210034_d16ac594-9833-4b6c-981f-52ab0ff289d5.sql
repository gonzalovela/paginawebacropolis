-- Create table for storing contact form submissions
CREATE TABLE public.inscripciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  interes TEXT NOT NULL,
  mensaje TEXT NOT NULL,
  sede_id UUID REFERENCES public.sedes(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.inscripciones ENABLE ROW LEVEL SECURITY;

-- Policy: Admins and editors can view all inscriptions
CREATE POLICY "Admins and editors can view all inscripciones"
ON public.inscripciones
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

-- Policy: Anyone can insert (public form)
CREATE POLICY "Anyone can insert inscripciones"
ON public.inscripciones
FOR INSERT
WITH CHECK (true);

-- Create index for performance
CREATE INDEX idx_inscripciones_sede_id ON public.inscripciones(sede_id);
CREATE INDEX idx_inscripciones_created_at ON public.inscripciones(created_at DESC);