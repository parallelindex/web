import { css, styled } from '../stitches.config';

export const label = {
  cursor: 'pointer',
  display: 'flex',
  fontSize: '$1',
  fontWeight: '$500',
  flexDirection: 'column',
  gap: '$1',
  maxWidth: '$full',
  '& > div:first-child': {
    alignItems: 'baseline',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
};

export const LabelCSS = css(label);

export const Label = styled('label', label);
