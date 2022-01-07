import { supabase } from './supabase';

export async function passwordReset({
  email,
  setIsSubmitted,
}: {
  email: string;
  setIsSubmitted;
}) {
  try {
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(
      email,
    );

    if (error) return { error: error.message };

    setIsSubmitted(true);
    return { data };
  } catch (error) {
    console.error('Error resetting password:', error.message);
  }
}

export async function passwordUpdate({
  accessToken,
  newPassword,
  setIsSubmitted,
}: {
  accessToken: string;
  newPassword: string;
  setIsSubmitted;
}) {
  try {
    const { error, data } = await supabase.auth.api.updateUser(accessToken, {
      password: newPassword,
    });

    if (error) return { error: error.message };

    setIsSubmitted(true);

    return { data };
  } catch (error) {
    console.error('Error changing password:', error.message);
  }
}
