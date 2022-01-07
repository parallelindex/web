import { css, styled } from 'ui';

export const Small = styled('div', {
  display: 'block',
  '@medium': { display: 'none' },
});

export const MediumFlexCSS = css({
  display: 'none',
  '@medium': { display: 'flex', gap: '0.5rem' },
});

export const Medium = styled('div', {
  display: 'none',
  '@medium': { display: 'block' },
});
