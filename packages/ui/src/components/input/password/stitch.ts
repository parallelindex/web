import { styled } from '../../../stitches.config';

export const Info = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
});

export const StrengthBar = styled('div', {
  display: 'grid',
  gap: '$1',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  padding: '$0 0',
  span: {
    backgroundColor: '$grey200',
    borderRadius: '$2',
    height: '0.125rem',
    width: '$full',
  },
  variants: {
    variant: {
      one: {
        'span:first-of-type': {
          backgroundColor: '$red',
        },
      },
      two: {
        'span:not(:nth-of-type(3)):not(:last-of-type)': {
          backgroundColor: '$yellow',
        },
      },
      three: {
        'span:not(:last-of-type)': {
          backgroundColor: '$green',
        },
      },
      four: {
        span: {
          backgroundColor: '$blue',
        },
      },
    },
  },
});
