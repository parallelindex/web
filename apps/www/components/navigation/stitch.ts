import { IoLogoGithub } from 'react-icons/io5';

import { styled } from 'ui';

const top = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  padding: '1rem 5vw',
};

const Header = styled('header', {
  position: 'absolute',
  top: '0',
  width: '$full',
  zIndex: '$top',
  '@medium': {
    position: 'fixed',
  },
});

const Footer = styled('footer', {
  ...top,
  marginBottom: '$10',
  marginTop: '$12',
  p: {
    color: '$grey500',
    marginTop: '$1',
    maxWidth: '$small',
    textAlign: 'center',
    strong: {
      color: '$foreground',
      fontWeight: '$500',
    },
  },
});

const GitHub = styled(IoLogoGithub, {
  height: '1.5rem',
  width: '1.5rem',
  opacity: '0.36',
  transition: '$all',
});

const Links = styled('ul', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  gap: '$4',
  justifyContent: 'center',
  listStyle: 'none',
  margin: '0',
  padding: '0',
  '& > *': {
    filter: 'saturate(0)',
    opacity: '0.5',
    transition: '$all',
    [`&:hover, &:hover ${GitHub}`]: {
      filter: 'saturate(1)',
      opacity: '1',
    },
  },
});

const Nav = styled('nav', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'space-between',
  margin: '0 auto',
  maxWidth: '$medium',
  width: '$full',
  '@medium': {
    flexDirection: 'row',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
  ul: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '0.5rem',
    justifyContent: 'center',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  'ul a': {
    borderRadius: '0.25rem',
    fontWeight: '$500',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    transition: 'all 0.1s ease-out',
    '&:hover': {
      backgroundColor: '$grey100',
    },
  },
});

const NavigationStitch = {
  Header,
  Footer,
  GitHub,
  Links,
  Nav,
};

export default NavigationStitch;
