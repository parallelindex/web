export default function Option({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  return <option value={value}>{children}</option>;
}
