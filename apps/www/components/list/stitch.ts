import { css, styled } from 'ui';

const list = {
  display: 'grid',
  gap: '$5',
  gridTemplateColumns: '1fr',
  listStyle: 'none',
  margin: '0',
  padding: '0',
  '@medium': {
    gridTemplateColumns: '1fr 1fr',
  },
  variants: {
    single: {
      true: {
        gap: '0',
        borderRadius: '$0',
        overflow: 'hidden',
        '@medium': {
          gridTemplateColumns: '1fr',
        },
      },
    },
  },
};

export const ListCSS = css(list);

export const ListStitch = styled('ul', list);
