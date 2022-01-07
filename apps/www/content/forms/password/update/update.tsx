import { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { IoCheckmarkCircle } from 'react-icons/io5';

import { passwordUpdate } from 'lib';
import { Card, CardCSS, Input, Warning } from 'ui';

import { Button } from '../../../../components';

import { Heading, Icon } from '../../stitch';
import { PasswordUpdateProps } from './types';
import validation from './validation';

export default function Update({ accessToken }: { accessToken: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const router = useRouter();

  if (isSubmitted)
    return (
      <Card>
        <IoCheckmarkCircle className={Icon({ variant: 'success' })} />
        <Heading>Your password has been updated!</Heading>
      </Card>
    );

  return (
    <Formik
      initialValues={{
        password: '',
        submit: '',
      }}
      validationSchema={validation}
      onSubmit={async (
        values: PasswordUpdateProps,
        { setSubmitting, setFieldError },
      ) => {
        setSubmitting(true);

        const { password } = values;

        const { error } = await passwordUpdate({
          accessToken,
          newPassword: password,
          setIsSubmitted,
        });

        error && setFieldError('submit', error);

        setSubmitting(false);

        setTimeout(() => {
          router.push('/logout?redirect=account');
        }, 3000);
      }}
    >
      {(formik) => (
        <Form className={CardCSS()}>
          <h2>Update Password</h2>

          <Input.Password
            label="New password"
            name="password"
            showStrength
            type="password"
          />

          {formik.errors.submit && (
            <Warning aria-live="polite">{formik.errors.submit}</Warning>
          )}

          <Button disabled={formik.isSubmitting} type="submit" full>
            Update password
          </Button>
        </Form>
      )}
    </Formik>
  );
}
