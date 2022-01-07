export default function removeImage({
  image,
  files,
  setFiles,
}: {
  image: File;
  files: File[];
  setFiles;
}) {
  const updatedFiles = files.filter((file) => file.name !== image.name);
  setFiles(updatedFiles);
}
