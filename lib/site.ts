/**
 * Works in three environments without any manual config:
 * - localhost           -> http://localhost:3000
 * - Vercel preview/prod  -> https://<the-actual-deployment-url>  (Vercel sets VERCEL_URL automatically)
 * - You can always override with NEXT_PUBLIC_SITE_URL if you have a custom domain.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}
