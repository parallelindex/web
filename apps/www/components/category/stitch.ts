import { styled } from 'ui';

export const CategoryStitch = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  fontSize: '$3',
  lineHeight: '$body',
  margin: '0 -5vw',
  marginTop: '$9',
  padding: '0 5vw',
  position: 'sticky',
  top: '0',
  zIndex: '$front',
  '@supports (backdrop-filter: blur())': {
    backdropFilter: 'blur(24px)',
    backgroundColor: '$transparent',
  },
  '@supports not (backdrop-filter: blur())': {
    backgroundColor: '$background',
  },
});
