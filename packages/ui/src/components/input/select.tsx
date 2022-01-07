import { useField } from 'formik';

import { Select as SelectStitch } from './stitch';
import { Help } from './help';
import { Label } from '../label';
import { Warning } from './warning';

export default function Select({
  children,
  help,
  label,
  name,
  ...props
}: {
  children: React.ReactNode;
  help?: boolean;
  label: string;
  name: string;
  props?;
}) {
  const [field, meta] = useField({ ...props, name });

  return (
    <Label htmlFor={name}>
      <div>
        <span>{label}</span>
        {help && <Help>{help}</Help>}
      </div>
      <SelectStitch {...field} {...props}>
        {children}
      </SelectStitch>

      {meta.touched && meta.error && (
        <Warning aria-live="polite">{meta.error}</Warning>
      )}
    </Label>
  );
}
