import { array, number, object, SchemaOf, string } from 'yup';
import * as EmailValidator from 'email-validator';
import { isPossiblePhoneNumber } from 'libphonenumber-js';

import { SubmitValidation } from './types';

export default function validation(logoFile, imageFiles) {
  return object({
    logo: array().test('logoRequired', 'Logo is required', () => {
      return logoFile;
    }),
    name: string()
      .max(64, 'Must be 64 characters or less')
      .required('Required'),
    description: string()
      .max(512, 'Must be 512 characters or less')
      .required('Required'),
    category: number().required('Required'),
    images: array().test('imageMax', '12 images max', () => {
      return imageFiles.length <= 12;
    }),
    website: string()
      .url('Website must be a valid URL beginning with https://')
      .required('Required'),
    email: string()
      .email('Invalid email address')
      .test('emailInvalid', 'Invalid email address', (value) =>
        value ? EmailValidator.validate(value) : true,
      ),
    phone: string().test('phoneRequired', 'Invalid phone number', (value) =>
      value ? isPossiblePhoneNumber(value.replace(/\D+/g, ''), 'US') : true,
    ),
    notes: string().max(1024, 'Must be 1024 characters or less'),
  }).defined() as SchemaOf<SubmitValidation>;
}
