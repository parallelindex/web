import { useEffect, useState } from 'react';
import { useField } from 'formik';
import { IoCaretUp, IoEye, IoEyeOff } from 'react-icons/io5';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import getStrengthClass from './getStrengthClass';
import getStrengthWord from './getStrengthWord';
import setPasswordStrength from './setPasswordStrength';

import { Password as PasswordStitch, Tip, Toggle } from '../stitch';
import { Help } from '../help';
import { Label } from '../../label';
import { Info, StrengthBar } from './stitch';
import { Tooltip } from '../../tooltip';
import { Warning } from '../warning';

export default function Password({
  help,
  label,
  name,
  placeholder,
  showStrength = false,
  type,
  ...props
}: {
  help?: string | React.ReactNode;
  label: string;
  name: string;
  placeholder?: string;
  showStrength?: boolean;
  type: string;
  props?;
}) {
  const [field, meta] = useField({ ...props, name, placeholder, type });
  const [visibility, setVisibility] = useState(false);

  return (
    <Label htmlFor={name}>
      <div>
        <span>{label}</span>
        {help && <Help>{help}</Help>}
      </div>
      <PasswordStitch>
        <input
          maxLength={100}
          placeholder={placeholder}
          type={visibility ? 'text' : 'password' || type}
          {...field}
          {...props}
        />

        <Tooltip content={visibility ? 'Hide password' : 'Show password'}>
          <Toggle onClick={() => setVisibility(!visibility)} type="button">
            {visibility ? <IoEye /> : <IoEyeOff />}
          </Toggle>
        </Tooltip>
      </PasswordStitch>

      {showStrength && <PasswordStrength value={meta.value} />}

      <Info aria-live="polite">
        {meta.touched && meta.error && (
          <Warning aria-live="polite">{meta.error}</Warning>
        )}

        {showStrength && <PasswordWord value={meta.value} />}
      </Info>
    </Label>
  );
}

function CapsLock() {
  return (
    <Tooltip content="Caps lock on">
      <Tip>
        <IoCaretUp />
        <VisuallyHidden.Root aria-live="polite">
          Caps lock on
        </VisuallyHidden.Root>
      </Tip>
    </Tooltip>
  );
}

function PasswordStrength({ value }: { value: string }) {
  const [strength, setStrength] = useState(NaN);

  useEffect(() => {
    setPasswordStrength({ value, setStrength });
  }, [value]);

  return (
    <StrengthBar variant={getStrengthClass(strength)}>
      <span />
      <span />
      <span />
      <span />
    </StrengthBar>
  );
}

function PasswordWord({ value }: { value: string }) {
  const [strength, setStrength] = useState(NaN);

  useEffect(() => {
    setPasswordStrength({ value, setStrength });
  }, [value]);

  return (
    <>
      {value.length > 0 && (
        <Help aria-live="polite" style={{ marginLeft: 'auto' }}>
          {getStrengthWord(strength)}
        </Help>
      )}
    </>
  );
}
