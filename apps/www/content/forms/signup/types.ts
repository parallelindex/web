export interface SignupProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
  captcha: boolean;
  submit: string;
}

export type SignupValidation = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
  captcha: boolean;
  submit: string;
};
