import { useField } from 'formik';

import { Textarea as TextareaStitch } from './stitch';
import { Help } from './help';
import { Label } from '../label';
import { Warning } from './warning';

export default function Textarea({
  help,
  label,
  name,
  placeholder,
  ...props
}: {
  help?: string | React.ReactNode;
  label: string;
  name: string;
  placeholder?: string;
  props?;
}) {
  const [field, meta] = useField({ ...props, name, placeholder });

  return (
    <Label htmlFor={name}>
      <div>
        <span>{label}</span>
        {help && <Help>{help}</Help>}
      </div>
      <TextareaStitch placeholder={placeholder} {...field} {...props} />

      {meta.touched && meta.error && (
        <Warning aria-live="polite">{meta.error}</Warning>
      )}
    </Label>
  );
}
