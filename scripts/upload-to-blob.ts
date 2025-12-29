/**
 * Upload large media files to Vercel Blob storage
 *
 * Usage:
 *   BLOB_READ_WRITE_TOKEN=your_token npx tsx scripts/upload-to-blob.ts
 *
 * Or with the token in .env.local:
 *   npx tsx scripts/upload-to-blob.ts
 */

import { put } from "@vercel/blob";
import * as fs from "fs";
import * as path from "path";

// Files to upload - paths relative to project root
const LARGE_MEDIA_FILES = [
  "public/experiments/lorenz-loop/lorenz_loop_4k.mp4",
  // Motion studies images
  "public/projects/motion-studies-invisible-systems/elxsis_complex_Droste_20251222_152017.png",
  "public/projects/motion-studies-invisible-systems/elxsis_complex_Kaleidoscope_20251222_151947.png",
  "public/projects/motion-studies-invisible-systems/elxsis_complex_logsinz_20251222_152121.png",
  "public/projects/motion-studies-invisible-systems/elxsis_complex_Ripple_20251222_151608.png",
  "public/projects/motion-studies-invisible-systems/elxsis_complex_Ripple_20251222_151640.png",
  "public/projects/motion-studies-invisible-systems/elxsis_complex_sinz²_20251222_151314.png",
  "public/projects/motion-studies-invisible-systems/elxsis_complex_Swirl_20251222_151426.png",
  "public/projects/motion-studies-invisible-systems/elxsis_complex_Swirl_20251222_151440.png",
  "public/projects/motion-studies-invisible-systems/elxsis_complex_Vortex_20251222_151524.png",
  "public/projects/motion-studies-invisible-systems/elxsis_complex_z³_-_z_20251222_151735.png",
  "public/projects/motion-studies-invisible-systems/elxsis_complex_z_+_1_z_Joukowski_20251222_151249.png",
  "public/projects/motion-studies-invisible-systems/elxsis_grayscott_F0.030_k0.057_i10000_s42_20251222_141707.png",
  "public/projects/motion-studies-invisible-systems/elxsis_grayscott_F0.040_k0.060_i8000_s42_20251222_134957.png",
  "public/projects/motion-studies-invisible-systems/elxsis_grayscott_F0.040_k0.060_i8000_s42_20251222_150129.png",
  "public/projects/motion-studies-invisible-systems/elxsis_grayscott_F0.050_k0.065_i6000_s42_20251222_133654.png",
  "public/projects/motion-studies-invisible-systems/elxsis_grayscott_F0.055_k0.062_i5000_s42_20251222_125739.png",
  "public/projects/motion-studies-invisible-systems/elxsis_grayscott_F0.055_k0.062_i5000_s42_20251222_130824.png",
  "public/projects/motion-studies-invisible-systems/elxsis_grayscott_F0.055_k0.062_i6000_s42_20251222_142837.png",
  "public/projects/motion-studies-invisible-systems/elxsis_grayscott_F0.055_k0.062_i6000_s42_20251222_144846.png",
  "public/projects/motion-studies-invisible-systems/elxsis_grayscott_F0.055_k0.062_i6000_s42_20251222_155137.png",
];

interface UploadResult {
  localPath: string;
  blobUrl: string;
  pathname: string;
}

async function uploadFile(localPath: string): Promise<UploadResult | null> {
  const fullPath = path.resolve(localPath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Skipping (not found): ${localPath}`);
    return null;
  }

  const fileBuffer = fs.readFileSync(fullPath);
  const filename = path.basename(localPath);

  // Preserve directory structure in blob pathname
  // e.g., "public/experiments/lorenz-loop/file.mp4" -> "experiments/lorenz-loop/file.mp4"
  const pathname = localPath.replace(/^public\//, "");

  console.log(`📤 Uploading: ${localPath} (${(fileBuffer.length / 1024 / 1024).toFixed(1)}MB)`);

  try {
    const blob = await put(pathname, fileBuffer, {
      access: "public",
      addRandomSuffix: false, // Keep exact filename
    });

    console.log(`✅ Uploaded: ${blob.url}`);
    return {
      localPath,
      blobUrl: blob.url,
      pathname: blob.pathname,
    };
  } catch (error) {
    console.error(`❌ Failed to upload ${localPath}:`, error);
    return null;
  }
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("❌ BLOB_READ_WRITE_TOKEN environment variable is required");
    console.log("\nSet it with:");
    console.log("  export BLOB_READ_WRITE_TOKEN=your_token_here");
    console.log("\nOr add to .env.local:");
    console.log("  BLOB_READ_WRITE_TOKEN=your_token_here");
    process.exit(1);
  }

  console.log("🚀 Starting Vercel Blob upload...\n");

  const results: UploadResult[] = [];

  for (const file of LARGE_MEDIA_FILES) {
    const result = await uploadFile(file);
    if (result) {
      results.push(result);
    }
  }

  console.log("\n📋 Upload Summary:");
  console.log("==================");
  console.log(`Total files: ${LARGE_MEDIA_FILES.length}`);
  console.log(`Uploaded: ${results.length}`);
  console.log(`Skipped/Failed: ${LARGE_MEDIA_FILES.length - results.length}`);

  if (results.length > 0) {
    console.log("\n📝 Blob URL Mapping (for updating references):");
    console.log("================================================");
    for (const result of results) {
      const publicPath = "/" + result.localPath.replace(/^public\//, "");
      console.log(`"${publicPath}": "${result.blobUrl}"`);
    }

    // Write mapping to a JSON file for reference
    const mappingPath = "blob-urls.json";
    const mapping = Object.fromEntries(
      results.map((r) => [
        "/" + r.localPath.replace(/^public\//, ""),
        r.blobUrl,
      ])
    );
    fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
    console.log(`\n💾 URL mapping saved to ${mappingPath}`);
  }
}

main().catch(console.error);
