import { object, SchemaOf, string } from 'yup';
import * as EmailValidator from 'email-validator';

import { PasswordResetValidation } from './types';

export const validation = object({
  email: string()
    .email('Invalid email address')
    .test('emailInvalid', 'Invalid email address', (value) =>
      value ? EmailValidator.validate(value) : true,
    )
    .required('Required'),
  submit: string(),
}).defined() as SchemaOf<PasswordResetValidation>;

export default validation;
