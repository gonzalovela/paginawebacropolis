-- Create table for cultura activities
CREATE TABLE public.cultura_actividades (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  titulo text NOT NULL,
  descripcion text NOT NULL,
  imagen_url text,
  icono text NOT NULL DEFAULT 'BookOpen',
  imagen_position text DEFAULT 'center',
  orden integer NOT NULL DEFAULT 0,
  activo boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.cultura_actividades ENABLE ROW LEVEL SECURITY;

-- Public can view active activities
CREATE POLICY "Anyone can view active cultura activities"
ON public.cultura_actividades
FOR SELECT
USING (activo = true);

-- Admins and editors can manage
CREATE POLICY "Admins and editors can insert cultura activities"
ON public.cultura_actividades
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Admins and editors can update cultura activities"
ON public.cultura_actividades
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Admins and editors can delete cultura activities"
ON public.cultura_actividades
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

-- Insert the 4 default activities
INSERT INTO public.cultura_actividades (slug, titulo, descripcion, icono, orden) VALUES
('charlas-conferencias', 'Charlas y Conferencias', 'Exploramos temas de filosofía, arte, mitología, historia y ciencias desde una perspectiva humanista. Conectamos lo mejor del pasado con el presente para enriquecer la visión sobre la vida y sobre sí mismo.', 'BookOpen', 1),
('encuentros-culturales', 'Eventos y Encuentros Culturales', 'Exposiciones de arte, mitología e historia de diversas civilizaciones, cinefórums, viajes culturales y eventos filosóficos interactivos realizados en un ambiente cercano y fraternal.', 'Globe', 2),
('musica-arte', 'Música y Arte', 'Promovemos un arte con mensajes que elevan el alma, a través de conciertos didácticos, recitales de música y poesía, así como presentaciones teatrales.', 'Music', 3),
('desarrollo-personal', 'Cursos de Desarrollo Personal', 'Somos pioneros en el desarrollo de habilidades blandas mediante cursos y talleres que ayudan a comunicarse mejor, manejar el estrés, mejorar las relaciones personales y desarrollar el liderazgo.', 'Lightbulb', 4);

-- Create storage bucket for cultura images
INSERT INTO storage.buckets (id, name, public) VALUES ('cultura-actividades', 'cultura-actividades', true);

-- Storage policies
CREATE POLICY "Anyone can view cultura images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'cultura-actividades');

CREATE POLICY "Admins and editors can upload cultura images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'cultura-actividades' AND (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role)));

CREATE POLICY "Admins and editors can update cultura images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'cultura-actividades' AND (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role)));

CREATE POLICY "Admins and editors can delete cultura images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'cultura-actividades' AND (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role)));