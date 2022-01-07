export default async function checkStrength(password: string) {
  const zxcvbn = (await import('zxcvbn')).default;
  const result = await zxcvbn(password);
  return result.score;
}
