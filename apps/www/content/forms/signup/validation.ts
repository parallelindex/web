import { boolean, object, SchemaOf, string } from 'yup';
import * as EmailValidator from 'email-validator';

import { SignupValidation } from './types';

export default function validation(captcha) {
  return object({
    firstName: string().required('Required'),
    lastName: string().required('Required'),
    email: string()
      .email('Invalid email address')
      .test('emailInvalid', 'Invalid email address', (value) =>
        value ? EmailValidator.validate(value) : true,
      )
      .required('Required'),
    password: string()
      .min(8, 'Password must be at least 8 characters')
      .max(100, 'Password must be less than 100 characters')
      .required('Required'),
    terms: boolean()
      .test(
        'termsRequired',
        'User must agree to Privacy Policy and Terms & Conditions',
        (value) => value === true,
      )
      .required('Required'),
    captcha: boolean()
      .test(
        'captchaRequired',
        'User must verify captcha to sign up',
        () => captcha === true,
      )
      .required('Required'),
    submit: string(),
  }).defined() as SchemaOf<SignupValidation>;
}
