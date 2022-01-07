import { NextRouter } from 'next/router';

export async function userSignUp({
  firstName,
  lastName,
  email,
  password,
  signUp,
  setIsSubmitted,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  signUp;
  setIsSubmitted;
}) {
  try {
    const { user, session, error } = await signUp({ email, password });
    const { id } = user;

    fetch(`/api/user/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });

    if (error) return { error: error.message };

    setIsSubmitted(true);
    return { user, session };
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
}

export async function userLogin({
  email,
  password,
  router,
  signIn,
}: {
  email: string;
  password: string;
  router: NextRouter;
  signIn;
}) {
  try {
    const { user, session, error } = await signIn({ email, password });

    if (error) return { error: error.message };

    router.push('/account');
    return { user, session };
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
}
