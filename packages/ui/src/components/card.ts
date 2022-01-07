import { css, styled } from '../stitches.config';

const card = {
  backgroundColor: '$background',
  borderRadius: '$1',
  boxShadow: '$2',
  display: 'flex',
  gap: '$4',
  flexDirection: 'column',
  margin: '0 auto',
  marginTop: '$9',
  maxWidth: '24rem',
  padding: '$7',
  h2: {
    fontSize: '$3',
    lineHeight: '$none',
    marginTop: '0',
    marginBottom: '0.5em',
    textAlign: 'center',
  },
  'h2 + *': {
    marginTop: '0',
  },
  h3: {
    marginBottom: '0',
  },
  p: {
    color: '$grey500',
    margin: '0',
    textAlign: 'center',
  },
};

export const CardCSS = css(card);

export const Card = styled('div', card);
