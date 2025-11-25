-- Create sedes table
CREATE TABLE public.sedes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  ciudad TEXT NOT NULL,
  direccion TEXT NOT NULL,
  whatsapp TEXT,
  facebook TEXT,
  instagram TEXT,
  tiktok TEXT,
  es_principal BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.sedes ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (everyone can view sedes)
CREATE POLICY "Sedes are viewable by everyone" 
ON public.sedes 
FOR SELECT 
USING (true);

-- Create policies for authenticated users to manage sedes (for CMS)
CREATE POLICY "Authenticated users can insert sedes" 
ON public.sedes 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update sedes" 
ON public.sedes 
FOR UPDATE 
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete sedes" 
ON public.sedes 
FOR DELETE 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_sedes_updated_at
BEFORE UPDATE ON public.sedes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();