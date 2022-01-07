export default function getStrengthWord(strength: number) {
  switch (strength) {
    case 0:
      return 'Weak';
    case 1:
      return 'Weak';
    case 2:
      return 'Okay';
    case 3:
      return 'Good';
    case 4:
      return 'Strong';
    default:
      break;
  }
}
