import { css, styled } from 'ui';

export const Icon = css({
  height: '6rem',
  margin: ' 0 auto',
  width: '6rem',
  variants: {
    variant: {
      success: {
        color: '$green',
      },
      error: {
        color: '$red',
      },
    },
  },
});

export const Heading = styled('h3', {
  fontSize: '$3',
  lineHeight: '$body',
  margin: '0',
  textAlign: 'center',
});
