export default function getStrengthClass(strength: number) {
  switch (strength) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    default:
      break;
  }
}
