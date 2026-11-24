DROP POLICY IF EXISTS "Anyone can insert inscripciones" ON public.inscripciones;
CREATE POLICY "Anyone can submit valid inscripciones" ON public.inscripciones
FOR INSERT TO anon, authenticated
WITH CHECK (
  length(btrim(nombre)) BETWEEN 1 AND 100
  AND length(email) BETWEEN 3 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(telefono)) BETWEEN 6 AND 30
  AND length(btrim(interes)) BETWEEN 1 AND 100
  AND length(mensaje) <= 2000
);