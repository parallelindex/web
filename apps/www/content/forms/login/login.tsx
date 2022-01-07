import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';

import { useAuth } from 'auth';
import { CardCSS, Input, Warning } from 'ui';

import { Button } from '../../../components';
import { userLogin } from '../../../lib';

import { LoginProps } from './types';
import validation from './validation';

export default function Login() {
  const router = useRouter();
  const { signIn } = useAuth();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: '',
      }}
      validationSchema={validation}
      onSubmit={async (
        values: LoginProps,
        { setSubmitting, setFieldError },
      ) => {
        setSubmitting(true);

        const { email, password } = values;

        const { error } = await userLogin({ email, password, router, signIn });

        error && setFieldError('submit', error);

        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className={CardCSS()}>
          <h2>Log in</h2>

          <Input.Textbox label="Email" name="email" type="text" />

          <Input.Password
            help={
              <Link href="/account/password/reset">
                <a>Forgot password?</a>
              </Link>
            }
            label="Password"
            name="password"
            type="password"
          />

          {formik.errors.submit && (
            <Warning aria-live="polite">{formik.errors.submit}</Warning>
          )}

          <Button disabled={formik.isSubmitting} type="submit" full>
            Log in
          </Button>
        </Form>
      )}
    </Formik>
  );
}
