import Tippy from '@tippyjs/react';

import { styled } from '../stitches.config';

const TippyTooltip = Tippy;

TippyTooltip.defaultProps = {
  arrow: `<svg width="12" height="12">
      <polygon points="6,6 12,12 0,12" />
    </svg>`,
  animation: 'shift-away',
  interactive: true,
  offset: [0, 10],
};

export const Tooltip = styled(Tippy, {
  $$background: '#000000bf',
  backgroundColor: '$$background',
  borderRadius: '$0',
  boxShadow: '$1',
  color: '$background',
  fontSize: '$0',
  padding: '$0 $2',
  '@supports (backdrop-filter: blur())': {
    backdropFilter: 'blur(24px)',
  },
  '.tippy-svg-arrow > svg': {
    fill: '$$background',
    margin: '0 auto',
  },
});
