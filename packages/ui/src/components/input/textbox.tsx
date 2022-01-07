import { useField } from 'formik';

import { Textbox as TextboxStitch } from './stitch';
import { Help } from './help';
import { Label } from '../label';
import { Warning } from './warning';

export default function Textbox({
  help,
  label,
  name,
  placeholder,
  type,
  ...props
}: {
  help?: string | React.ReactNode;
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  props?;
}) {
  const [field, meta] = useField({ ...props, name, placeholder, type });

  return (
    <Label htmlFor={name}>
      <div>
        <span>{label}</span>
        {help && <Help>{help}</Help>}
      </div>
      <TextboxStitch
        id={name}
        placeholder={placeholder}
        type={type}
        {...field}
        {...props}
      />

      {meta.touched && meta.error && (
        <Warning aria-live="polite">{meta.error}</Warning>
      )}
    </Label>
  );
}
