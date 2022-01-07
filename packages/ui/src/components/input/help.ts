import { styled } from '../../stitches.config';

export const Help = styled('div', {
  color: '$grey500',
  fontSize: '$0',
  fontWeight: '$400',
  lineHeight: '$body',
  a: {
    color: '$grey500',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});
