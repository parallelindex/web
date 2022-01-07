import { useField } from 'formik';
import NumberFormat from 'react-number-format';

import { Textbox } from './stitch';
import { Help } from './help';
import { Label } from '../label';
import { Warning } from './warning';

export default function Number({
  format,
  help,
  label,
  name,
  placeholder,
  ...props
}: {
  format: string;
  help?: string;
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
      <NumberFormat
        customInput={Textbox}
        format={format}
        placeholder={placeholder}
        {...field}
        {...props}
      />

      {meta.touched && meta.error && (
        <Warning aria-live="polite">{meta.error}</Warning>
      )}
    </Label>
  );
}
