-- Add email_status column to track email delivery status
ALTER TABLE public.invitations 
ADD COLUMN email_status text NOT NULL DEFAULT 'pending';

-- Add comment for documentation
COMMENT ON COLUMN public.invitations.email_status IS 'Status of email delivery: pending, sent, failed';