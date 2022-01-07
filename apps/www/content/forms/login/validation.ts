import { object, SchemaOf, string } from 'yup';
import * as EmailValidator from 'email-validator';

import { LoginValidation } from './types';

export const validation = object({
  email: string()
    .email('Invalid email address')
    .test('emailInvalid', 'Invalid email address', (value) =>
      value ? EmailValidator.validate(value) : true,
    )
    .required('Required'),
  password: string().required('Required'),
  submit: string(),
}).defined() as SchemaOf<LoginValidation>;

export default validation;
