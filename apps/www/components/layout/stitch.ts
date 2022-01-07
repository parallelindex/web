import { styled } from 'ui';

export const Main = styled('main', {
  margin: '$12 5vw 0',
  '& > *': {
    margin: '0 auto',
    maxWidth: '32rem',
  },
  variants: {
    wide: {
      true: {
        '& > *': {
          maxWidth: '$medium',
        },
      },
    },
  },
});
