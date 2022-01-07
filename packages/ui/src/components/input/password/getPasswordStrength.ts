import checkStrength from './checkStrength';

export default async function getPasswordStrength(value: string) {
  const passwordStrength = await checkStrength(value);
  return passwordStrength;
}
