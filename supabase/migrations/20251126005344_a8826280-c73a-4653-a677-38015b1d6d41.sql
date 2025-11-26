-- Create storage bucket for volunteer activity photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('voluntariado-fotos', 'voluntariado-fotos', true);

-- Create table for volunteer photos
CREATE TABLE public.voluntariado_fotos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  categoria TEXT NOT NULL, -- 'ambiental', 'social', 'cultural'
  imagen_url TEXT NOT NULL,
  orden INTEGER DEFAULT 0,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.voluntariado_fotos ENABLE ROW LEVEL SECURITY;

-- RLS Policies for voluntariado_fotos
CREATE POLICY "Photos are viewable by everyone"
ON public.voluntariado_fotos
FOR SELECT
USING (activo = true);

CREATE POLICY "Admins and editors can insert photos"
ON public.voluntariado_fotos
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Admins and editors can update photos"
ON public.voluntariado_fotos
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Admins and editors can delete photos"
ON public.voluntariado_fotos
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_voluntariado_fotos_updated_at
BEFORE UPDATE ON public.voluntariado_fotos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Storage policies for voluntariado-fotos bucket
CREATE POLICY "Photos are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'voluntariado-fotos');

CREATE POLICY "Admins and editors can upload photos"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'voluntariado-fotos' AND
  (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role))
);

CREATE POLICY "Admins and editors can update photos"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'voluntariado-fotos' AND
  (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role))
);

CREATE POLICY "Admins and editors can delete photos"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'voluntariado-fotos' AND
  (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role))
);