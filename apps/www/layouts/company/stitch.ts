import { styled } from 'ui';

const Heading = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  fontWeight: '$500',
  gap: '$4',
});

const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  marginTop: '$4',
  padding: '$4',
  '@medium': {
    gridTemplateColumns: '1fr 24rem',
  },
});

const Description = styled('div', {
  color: '$grey500',
  fontSize: '$1',
  fontWeight: '$400',
  lineHeight: '$text',
});

const Feature = styled('div', {
  aspectRatio: '16 / 9',
  overflow: 'hidden',
  position: 'relative',
  width: '$full',
});

const Links = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  justifyContent: 'flex-start',
  'a, span:not(.container)': {
    alignItems: 'center',
    borderRadius: '$0',
    color: '$grey500',
    display: 'flex',
    fontWeight: '$500',
    gap: '$3',
    lineHeight: '$none',
    position: 'relative',
    transition: '$all',
    wordBreak: 'break-all',
    width: '$full',
    '&:hover': {
      color: '$foreground',
    },
    'svg, .svg': {
      alignItems: 'center',
      borderRadius: '$half',
      display: 'flex',
      height: '2rem',
      padding: '$2',
      width: '2rem',
    },
    svg: {
      backgroundColor: '$grey100',
    },
  },
});

const Logo = styled('span', {
  borderRadius: '$half',
  height: '3rem',
  overflow: 'hidden',
  position: 'relative',
  width: '3rem',
});

export const CompanyStitch = {
  Content,
  Description,
  Feature,
  Heading,
  Links,
  Logo,
};
