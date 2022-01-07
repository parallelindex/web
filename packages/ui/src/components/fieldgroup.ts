import { styled } from '../stitches.config';
import { Label } from './label';

export const FieldGroup = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '$4',

  [`& ${Label}`]: {
    flexGrow: '1',
    '@medium': {
      width: 'calc(50% - 0.5rem)',
    },
  },
});
