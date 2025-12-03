-- Add departamento and distrito columns to sedes table
ALTER TABLE public.sedes 
ADD COLUMN departamento text,
ADD COLUMN distrito text;

-- Update existing data: move current ciudad to distrito, set proper ciudad/departamento
-- Lima sedes
UPDATE public.sedes SET departamento = 'Lima', distrito = ciudad WHERE ciudad IN ('Lima', 'San Isidro');
UPDATE public.sedes SET ciudad = 'Lima' WHERE departamento = 'Lima';

-- Arequipa sedes
UPDATE public.sedes SET departamento = 'Arequipa', distrito = ciudad WHERE ciudad = 'Arequipa';
UPDATE public.sedes SET ciudad = 'Arequipa' WHERE departamento = 'Arequipa';

-- Ayacucho sedes
UPDATE public.sedes SET departamento = 'Ayacucho', distrito = ciudad WHERE ciudad = 'Ayacucho';
UPDATE public.sedes SET ciudad = 'Ayacucho' WHERE departamento = 'Ayacucho';

-- Cajamarca sedes
UPDATE public.sedes SET departamento = 'Cajamarca', distrito = ciudad WHERE ciudad = 'Cajamarca';
UPDATE public.sedes SET ciudad = 'Cajamarca' WHERE departamento = 'Cajamarca';

-- Cusco sedes
UPDATE public.sedes SET departamento = 'Cusco', distrito = ciudad WHERE ciudad = 'Cusco';
UPDATE public.sedes SET ciudad = 'Cusco' WHERE departamento = 'Cusco';

-- Huancayo sedes (Junín department)
UPDATE public.sedes SET departamento = 'Junín', distrito = ciudad WHERE ciudad = 'Huancayo';
UPDATE public.sedes SET ciudad = 'Huancayo' WHERE departamento = 'Junín';

-- Huánuco sedes
UPDATE public.sedes SET departamento = 'Huánuco', distrito = ciudad WHERE ciudad = 'Huánuco';
UPDATE public.sedes SET ciudad = 'Huánuco' WHERE departamento = 'Huánuco';

-- Other cities - set departamento same as ciudad for now
UPDATE public.sedes SET departamento = ciudad, distrito = nombre WHERE departamento IS NULL;

-- Make departamento required going forward
ALTER TABLE public.sedes ALTER COLUMN departamento SET NOT NULL;
ALTER TABLE public.sedes ALTER COLUMN departamento SET DEFAULT '';