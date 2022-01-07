import getPasswordStrength from './getPasswordStrength';

export default async function setPasswordStrength({
  value,
  setStrength,
}: {
  value: string;
  setStrength;
}) {
  getPasswordStrength(value).then((result) => setStrength(result));
}
