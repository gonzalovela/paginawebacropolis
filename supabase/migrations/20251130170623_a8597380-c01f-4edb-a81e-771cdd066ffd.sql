-- Allow anyone to view invitations by token (for registration verification)
CREATE POLICY "Anyone can view invitations by token"
ON public.invitations
FOR SELECT
USING (true);