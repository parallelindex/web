import imageCompression from 'browser-image-compression';

import { supabase } from 'lib';

export async function getImageUrl({
  bucket,
  path,
  setUrl,
}: {
  bucket: string;
  path: string;
  setUrl;
}) {
  try {
    const { publicURL, error } = await supabase.storage
      .from(bucket)
      .getPublicUrl(path);

    setUrl(publicURL);
  } catch (error) {
    console.error('Error downloading image:', error.message);
  }
}

export async function uploadImages({
  bucket,
  path,
  files,
  names,
}: {
  bucket: string;
  path: string;
  files: File[];
  names: string[];
}) {
  try {
    files.map(async (file, index) => {
      const compressedFile =
        file.type === 'image/svg+xml'
          ? file
          : await imageCompression(file, {
              maxSizeMB: 4,
            });

      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(`${path}/${names[index]}`, compressedFile, {
          cacheControl: '3600',
          upsert: true,
        });

      return data;
    });
  } catch (error) {
    console.error('Error uploading images:', error.message);
  }
}

export async function deleteImages({
  bucket,
  path,
  names,
}: {
  bucket: string;
  path: string;
  names: string[];
}) {
  try {

    const paths = names.map(name => `${path}/${name}`);

    const { data, error } = await supabase.storage
        .from(bucket)
        .remove(paths)

      return data;
      
  } catch (error) {
    console.error('Error uploading images:', error.message);
  }
}
