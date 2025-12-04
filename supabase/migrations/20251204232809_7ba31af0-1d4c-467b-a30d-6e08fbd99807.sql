-- Add 'content_manager' to the app_role enum
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'content_manager';