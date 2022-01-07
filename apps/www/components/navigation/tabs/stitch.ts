import { css, styled } from 'ui';

const active = { color: '$foreground' };

export const TabActiveCSS = css(active);

export const TabsStitch = styled('div', {
  borderRadius: '$0',
  bottom: '0',
  boxShadow: '$3',
  display: 'flex',
  flexDirection: 'row',
  left: '0',
  position: 'fixed',
  width: '100%',
  zIndex: '$top',
  '@supports (backdrop-filter: blur())': {
    backdropFilter: 'blur(24px)',
    backgroundColor: '$transparent',
  },
  '@supports not (backdrop-filter: blur())': {
    backgroundColor: '$background',
  },
  '&:focus': {
    outline: 'none',
  },
  a: {
    alignItems: 'center',
    color: '$grey500',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    fontWeight: '$500',
    gap: '$1',
    lineHeight: '$none',
    justifyContent: 'center',
    padding: '$2 0',
    transition: '$colors',
    '&:hover': { color: '$grey600' },
    [`&.${TabActiveCSS}`]: active,
    svg: {
      color: 'currentColor',
      height: '1.5rem',
      transition: '$all',
      width: '1.5rem',
    },
  },
});
