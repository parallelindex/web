import { globalCss } from 'ui';

export const globalStyles = globalCss({
  '@import': 'url("https://rsms.me/inter/inter.css")',
  'html, body': {
    backgroundColor: '$background',
    boxSizing: 'border-box',
    color: '$foreground',
    fontFamily: '$body',
    fontSize: '$1',
    lineHeight: '$text',
    margin: '0',
    padding: '0',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  h2: {
    fontSize: '$1',
  },
  h4: {
    fontWeight: '$500',
    lineHeight: '$body',
    margin: '0',
  },
  'p a': {
    textDecoration: 'underline',
  },
  a: {
    color: '$foreground',
    textDecoration: 'none',
  },
  img: {
    display: 'block',
    maxWidth: '$full',
  },
  '.headroom': {
    backgroundColor: '$background',
    boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0)',
    padding: '1rem 5vw',
    position: 'absolute',
    top: '0',
    transition:
      'box-shadow 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
    width: '$full',
    zIndex: '$front',
    a: {
      display: 'flex',
    },
    '@medium': {
      position: 'fixed',
      '&--unfixed': {
        position: 'fixed !important',
      },
      '&--scrolled, &--pinned': {
        boxShadow: '$2',
      },
      '&--unpinned': {
        transform: 'translateY(-100%)',
      },
    },
  },
});
