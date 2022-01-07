import { useField } from 'formik';

import { Checkbox as CheckboxStitch } from './stitch';
import { Label } from '../label';
import { Warning } from './warning';

export default function Checkbox({
  children,
  label,
  name,
  ...props
}: {
  children: React.ReactNode;
  label?: string;
  name: string;
  props?;
}) {
  const [field, meta] = useField({ ...props, name, type: 'checkbox' });

  return (
    <Label htmlFor={name}>
      <div>
        <span>{label}</span>
      </div>

      <CheckboxStitch>
        <input type="checkbox" {...field} {...props} />

        <p>{children}</p>
      </CheckboxStitch>

      {meta.touched && meta.error && (
        <Warning aria-live="polite">{meta.error}</Warning>
      )}
    </Label>
  );
}
