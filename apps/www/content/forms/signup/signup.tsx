import { useState } from 'react';
import { Formik, Form } from 'formik';
import { IoCheckmarkCircle } from 'react-icons/io5';

import { useAuth } from 'auth';
import { Captcha } from 'lib';
import { Card, CardCSS, FieldGroup, Input, Warning } from 'ui';

import { Button } from '../../../components';
import { userSignUp } from '../../../lib';

import { Heading, Icon } from '../stitch';
import { SignupProps } from './types';
import validation from './validation';

export default function Signup() {
  const [captcha, setCaptcha] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { signUp } = useAuth();

  if (isSubmitted)
    return (
      <Card>
        <IoCheckmarkCircle className={Icon({ variant: 'success' })} />
        <Heading>Check your mailbox to verify your email!</Heading>
      </Card>
    );

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          terms: false,
          captcha: false,
          submit: '',
        }}
        validationSchema={validation(captcha)}
        onSubmit={async (
          values: SignupProps,
          { setSubmitting, setFieldError },
        ) => {
          setSubmitting(true);

          const { firstName, lastName, email, password } = values;

          const { error } = await userSignUp({
            firstName,
            lastName,
            email,
            password,
            signUp,
            setIsSubmitted,
          });

          error && setFieldError('submit', error);

          setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form className={CardCSS()}>
            <h2>Sign up</h2>

            <FieldGroup>
              <Input.Textbox label="First name" name="firstName" type="text" />
              <Input.Textbox label="Last name" name="lastName" type="text" />
            </FieldGroup>

            <Input.Textbox label="Email" name="email" type="text" />

            <Input.Password
              label="Password"
              name="password"
              showStrength
              type="password"
            />

            <Input.Checkbox name="terms">
              I agree to Parallel Index&apos;s{' '}
              <a
                href="https://www.iubenda.com/privacy-policy/16878253"
                rel="noreferrer"
                target="_blank"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://www.iubenda.com/terms-and-conditions/16878253"
                rel="noreferrer"
                target="_blank"
              >
                Terms &amp; Conditions
              </a>
            </Input.Checkbox>

            <div>
              <Captcha onVerify={() => setCaptcha(true)} />
              {formik.touched.captcha && formik.errors.captcha && (
                <Warning aria-live="polite">{formik.errors.captcha}</Warning>
              )}
            </div>

            <Button disabled={formik.isSubmitting} type="submit" full>
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
