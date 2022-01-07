import { object, SchemaOf, string } from 'yup';

import { PasswordUpdateValidation } from './types';

export const validation = object({
  password: string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be less than 100 characters')
    .required('Required'),
  submit: string(),
}).defined() as SchemaOf<PasswordUpdateValidation>;

export default validation;
