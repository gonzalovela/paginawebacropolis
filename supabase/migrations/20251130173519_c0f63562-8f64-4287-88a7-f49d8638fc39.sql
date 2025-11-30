-- Create table for voluntariado programs
CREATE TABLE public.voluntariado_programas (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  titulo text NOT NULL,
  descripcion text NOT NULL,
  imagen_url text,
  icono text NOT NULL DEFAULT 'Heart',
  actividades text[] DEFAULT '{}',
  orden integer NOT NULL DEFAULT 0,
  activo boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.voluntariado_programas ENABLE ROW LEVEL SECURITY;

-- Public can view active programs
CREATE POLICY "Anyone can view active voluntariado programs"
ON public.voluntariado_programas
FOR SELECT
USING (activo = true);

-- Admins and editors can manage
CREATE POLICY "Admins and editors can insert voluntariado programs"
ON public.voluntariado_programas
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Admins and editors can update voluntariado programs"
ON public.voluntariado_programas
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Admins and editors can delete voluntariado programs"
ON public.voluntariado_programas
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

-- Insert the 6 default programs
INSERT INTO public.voluntariado_programas (slug, titulo, descripcion, icono, actividades, orden) VALUES
('yo-amo-lectura', 'Programa ''Yo Amo la Lectura''', 'Dirigido a beneficiar a escolares de nivel primaria en situación de vulnerabilidad social o económica. Realizamos jornadas periódicas para que los niños cultiven el amor por la lectura y los valores que estas promueven. En algunas ciudades hemos implementado bibliotecas para colegios de escasos recursos económicos.', 'BookOpen', ARRAY['Jornadas de lectura en colegios', 'Bibliotecas comunitarias', 'Talleres de valores', 'Donación de libros'], 1),
('adulto-mayor', 'Programa de Acompañamiento al Adulto Mayor', 'Brindamos compañía, escucha activa y actividades recreativas para adultos mayores. Promovemos su bienestar emocional y social mediante visitas regulares y programas de integración.', 'Heart', ARRAY['Visitas a asilos', 'Actividades recreativas', 'Talleres de memoria', 'Apoyo emocional'], 2),
('humanitario-social', 'Acciones de Voluntariado Humanitario y Social', 'Brindamos apoyo oportuno a damnificados por friaje, huaycos y desastres naturales. Organizamos colectas y donaciones de víveres, ropa de abrigo, productos de aseo y mantenimiento. En nuestras Escuelas, equipos de voluntarios participan de talleres de tejido y confección de ropa de abrigo para donarla a comunidades altoandinas afectadas por el friaje.', 'HandHeart', ARRAY['Colectas de víveres y ropa', 'Apoyo en desastres naturales', 'Talleres de tejido', 'Donaciones a comunidades altoandinas'], 3),
('medio-ambiente', 'Programa de Protección del Medio Ambiente', 'Eventos de concientización para el cuidado del medioambiente. Acciones ecológicas en más de 50 comunidades por el Día Internacional de la Madre Tierra. Limpieza de centros arqueológicos, playas, ríos y áreas verdes. Sembrado de árboles.', 'Sprout', ARRAY['Jornadas de reforestación', 'Limpieza de playas y ríos', 'Limpieza de centros arqueológicos', 'Eventos de concientización ambiental'], 4),
('formacion-voluntarios', 'Programa de Formación de Voluntarios', 'Nuestros voluntarios participan de capacitaciones técnicas, formación filosófica y desarrollo de habilidades blandas. De esta manera, les damos herramientas para conocerse, desarrollar sus valores y cultivar las fortalezas que les permiten dar lo mejor de sí en el servicio a los demás.', 'Users', ARRAY['Capacitaciones técnicas', 'Formación filosófica', 'Desarrollo de habilidades', 'Talleres de liderazgo'], 5),
('talleres-artisticos', 'Talleres Artísticos', 'Desarrollamos talleres para llevar alegría y compañía. En nuestras Escuelas, el Área de Voluntariado desarrolla algunos talleres artísticos, como teatro, baile o manualidades, en el que nuestros voluntarios preparan lo que habrán de ofrecer en nuestras obras de voluntariado.', 'Lightbulb', ARRAY['Teatro', 'Baile', 'Manualidades', 'Presentaciones artísticas'], 6);

-- Create storage bucket for voluntariado program images
INSERT INTO storage.buckets (id, name, public) VALUES ('voluntariado-programas', 'voluntariado-programas', true);

-- Storage policies
CREATE POLICY "Anyone can view voluntariado program images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'voluntariado-programas');

CREATE POLICY "Admins and editors can upload voluntariado program images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'voluntariado-programas' AND (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role)));

CREATE POLICY "Admins and editors can update voluntariado program images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'voluntariado-programas' AND (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role)));

CREATE POLICY "Admins and editors can delete voluntariado program images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'voluntariado-programas' AND (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role)));