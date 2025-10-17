-- Create portfolio items table
CREATE TABLE public.portfolio_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;

-- Create policy for public viewing (everyone can see portfolio items)
CREATE POLICY "Anyone can view portfolio items" 
ON public.portfolio_items 
FOR SELECT 
USING (true);

-- Create policy for admin insert (for now, anyone authenticated can add)
CREATE POLICY "Authenticated users can insert portfolio items" 
ON public.portfolio_items 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

-- Create policy for admin update
CREATE POLICY "Authenticated users can update portfolio items" 
ON public.portfolio_items 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

-- Create policy for admin delete
CREATE POLICY "Authenticated users can delete portfolio items" 
ON public.portfolio_items 
FOR DELETE 
USING (auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_portfolio_items_updated_at
BEFORE UPDATE ON public.portfolio_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for portfolio media
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-media', 'portfolio-media', true);

-- Storage policies for portfolio media
CREATE POLICY "Anyone can view portfolio media" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'portfolio-media');

CREATE POLICY "Authenticated users can upload portfolio media" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'portfolio-media' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete portfolio media" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'portfolio-media' AND auth.uid() IS NOT NULL);