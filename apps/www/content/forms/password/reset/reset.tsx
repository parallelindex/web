import { useState } from 'react';
import { Formik, Form } from 'formik';
import { IoCheckmarkCircle } from 'react-icons/io5';

import { passwordReset } from 'lib';
import { Card, CardCSS, Input, Warning } from 'ui';

import { Button } from '../../../../components';

import { Heading, Icon } from '../../stitch';
import { PasswordResetProps } from './types';

import validation from './validation';

export default function Reset() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted)
    return (
      <Card>
        <IoCheckmarkCircle className={Icon({ variant: 'success' })} />
        <Heading>Password reset!</Heading>
        <p>Check your email for a reset link.</p>
      </Card>
    );

  return (
    <Formik
      initialValues={{
        email: '',
        submit: '',
      }}
      validationSchema={validation}
      onSubmit={async (
        values: PasswordResetProps,
        { setSubmitting, setFieldError },
      ) => {
        setSubmitting(true);

        const { email } = values;

        const { error } = await passwordReset({ email, setIsSubmitted });

        error && setFieldError('submit', error);

        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className={CardCSS()}>
          <h2>Reset Password</h2>

          <Input.Textbox label="Email" name="email" type="text" />

          {formik.errors.submit && (
            <Warning aria-live="polite">{formik.errors.submit}</Warning>
          )}

          <Button disabled={formik.isSubmitting} type="submit" full>
            Reset password
          </Button>
        </Form>
      )}
    </Formik>
  );
}
