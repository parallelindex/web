import HCaptcha from '@hcaptcha/react-hcaptcha';

const hcaptchaSitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY;

export function Captcha({ ...props }) {
  return <HCaptcha sitekey={hcaptchaSitekey} {...props} />;
}
