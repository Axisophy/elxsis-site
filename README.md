# Elxsis Website

Computational art and research studio website built with [Next.js](https://nextjs.org).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/                    # Next.js App Router pages
  experiments/          # Experiments catalogue
  projects/             # Project pages
  about/, process/, etc.
components/             # React components
  experiments/          # Experiment data and client components
  layout/               # Header and footer
public/                 # Static assets
  experiments/          # Experiment gallery images
  projects/             # Project images
scripts/                # Utility scripts
```

## Large Media Files (Vercel Blob)

Large media files (videos, high-resolution images) are hosted on [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) to avoid Git repository bloat.

### Files on Blob Storage

- `experiments/lorenz-loop/lorenz_loop_4k.mp4` (350MB video)
- `projects/motion-studies-invisible-systems/*.png` (high-res renders)

These files are listed in `.gitignore` and should not be committed to Git.

### Uploading New Large Files

1. Get your `BLOB_READ_WRITE_TOKEN` from the Vercel dashboard:
   - Go to Project Settings → Storage → Blob
   - Copy the read-write token

2. Add files to the `LARGE_MEDIA_FILES` array in `scripts/upload-to-blob.ts`

3. Run the upload script:
   ```bash
   BLOB_READ_WRITE_TOKEN=your_token npx tsx scripts/upload-to-blob.ts
   ```

4. The script outputs a URL mapping. Update any references in the code to use the Blob URLs.

5. Add the local files to `.gitignore`

### Viewing Uploaded Files

View all uploaded files in the Vercel dashboard under Project → Storage → Blob.

## Environment Variables

For local development, create `.env.local`:

```env
# Required for blob uploads (get from Vercel dashboard)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...
```

## Deployment

The site deploys automatically to Vercel on push to `main`.

- Production: https://elxsis.com
- Preview deployments are created for pull requests
