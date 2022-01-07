import Image from 'next/image';

import { css, styled } from 'ui';

export const FormCSS = css({
  maxWidth: '$small',
});

export const ImageUpload = styled('div', {
  alignItems: 'center',
  backgroundColor: '$grey50',
  border: '1px solid $colors$grey100',
  borderRadius: '$1',
  color: '$grey500',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '$6',
  transition: '$all',
  '&:hover': {
    backgroundColor: '$grey100',
    color: '$grey600',
  },
  svg: {
    height: '3rem',
    margin: '0 auto',
    transition: '$all',
    width: '3rem',
  },
  p: {
    fontWeight: '$400',
    margin: '1em auto 0',
  },
});

export const LogoImage = styled(Image, {
  borderRadius: '$half',
  overflow: 'hidden',
  transition: '$all',
});

export const LogoInputCSS = css({
  height: '6rem',
  marginLeft: '50%',
  transform: 'translateX(-50%)',
  width: '6rem',
  zIndex: '$front',
});

export const LogoUpload = styled('div', {
  alignItems: 'center',
  backgroundColor: '$background',
  borderRadius: '$half',
  boxShadow: '$1',
  color: '$grey500',
  cursor: 'pointer',
  display: 'inline-flex',
  height: '6rem',
  justifyContent: 'center',
  margin: '0 auto',
  position: 'relative',
  transition: '$all',
  width: '6rem',
  '&:hover': {
    color: '$grey600',
  },
  [`&:hover ${LogoImage}`]: {
    opacity: '0.5',
  },
  svg: {
    height: '3rem',
    transition: '$all',
    width: '3rem',
  },
});
