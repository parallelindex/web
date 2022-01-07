import { styled, animations } from 'ui';

export const Button = styled('button', {
  appearance: 'none',
  backgroundColor: '$foreground',
  border: 'none',
  borderRadius: '$0',
  boxShadow: '$0',
  color: '$background',
  cursor: 'pointer',
  fontFamily: '$body',
  fontSize: '$1',
  fontWeight: '$500',
  lineHeight: '100%',
  padding: '$3 $6',
  transition: '$all',
  '&:hover': {
    boxShadow: '$1',
  },
  '&:disabled': {
    backgroundColor: '$grey500',
  },
  variants: {
    variant: {
      secondary: {
        backgroundColor: '$background',
        color: '$foreground',
      },
    },
    full: {
      true: {
        width: '$full',
      },
    },
    loading: {
      true: {
        animation: `${animations} 0.3s infinite`,
      },
    },
  },
});
