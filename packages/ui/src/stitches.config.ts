import { createStitches } from '@stitches/react';

const defaultTheme = {
  colors: {
    primary: '#FF4040',
    background: '#fff',
    grey50: 'rgba(0, 0, 0, 0.015)',
    grey100: 'rgba(0, 0, 0, 0.03)',
    grey200: 'rgba(0, 0, 0, 0.06)',
    grey300: 'rgba(0, 0, 0, 0.12)',
    grey400: 'rgba(0, 0, 0, 0.24)',
    grey500: 'rgba(0, 0, 0, 0.48)',
    grey600: 'rgba(0, 0, 0, 0.6)',
    grey700: 'rgba(0, 0, 0, 0.72)',
    grey800: 'rgba(0, 0, 0, 0.84)',
    grey900: 'rgba(0, 0, 0, 0.96)',
    foreground: '#000',
    transparent: '#ffffffbf',
    blue: '#0055ff',
    green: '#29cc5f',
    red: '#ff3434',
    yellow: '#ffaa00',
  },
  fonts: {
    body: `Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  fontSizes: { 0: '0.8rem', 1: '1rem', 2: '1.25rem', 3: '1.5rem', 4: '2rem' },
  fontWeights: { 400: '400', 500: '500', 800: '800' },
  lineHeights: { none: '100%', heading: '120%', body: '140%', text: '180%' },
  letterSpacings: { heading: '-0.05rem' },
  radii: {
    0: '0.25rem',
    1: '0.5rem',
    2: '1rem',
    3: '2rem',
    half: '50%',
    full: '9999px',
  },
  sizes: {
    small: '30rem',
    medium: '60rem',
    large: '90rem',
    half: '50%',
    full: '100%',
  },
  space: {
    0: '0.125rem',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '2rem',
    8: '2.5rem',
    9: '3rem',
    10: '4rem',
    11: '6rem',
    12: '8rem',
  },
  zIndices: { back: '-1', front: '1', top: '2' },
  shadows: {
    0: '0 1px 4px 0 rgba(0, 0, 0, 0.06)',
    1: '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
    2: '0 4px 16px 0 rgba(0, 0, 0, 0.10)',
    3: '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
    inset: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.1)',
    modal: '0px 32px 64px $colors$grey300',
  },
  transitions: {
    all: 'all 0.1s ease-out',
    colors:
      'background-color 0.1s ease-out, border-color 0.1s ease-out, color 0.1s ease-out, fill 0.1s ease-out, stroke 0.1s ease-out',
    shadow: 'box-shadow 0.1s ease-out',
    transform: 'transform 0.1s ease-out',
  },
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: defaultTheme,
  media: {
    small: '(min-width: 30rem)',
    medium: '(min-width: 60rem)',
    large: '(min-width: 90rem)',
  },
});

export const animations = {
  spin: keyframes({
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  }),
};

export const darkTheme = createTheme('dark', {
  ...defaultTheme,
  colors: {
    background: '#000',
    grey100: 'rgba(255, 255, 255, 0.03)',
    grey200: 'rgba(255, 255, 255, 0.06)',
    grey300: 'rgba(255, 255, 255, 0.12)',
    grey400: 'rgba(255, 255, 255, 0.24)',
    grey500: 'rgba(255, 255, 255, 0.48)',
    grey600: 'rgba(255, 255, 255, 0.6)',
    grey700: 'rgba(255, 255, 255, 0.72)',
    grey800: 'rgba(255, 255, 255, 0.84)',
    grey900: 'rgba(255, 255, 255, 0.96)',
    foreground: '#fff',
    transparent: '#000000bf',
    blue: '#0055ff',
    green: '#29cc5f',
    red: '#ff3434',
    yellow: '#ffaa00',
  },
});
