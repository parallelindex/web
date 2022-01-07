import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

import { styled } from '../../stitches.config';

export const GridImage = styled(Image, {});

export const ImageGrid = styled('div', {
  borderRadius: '$2',
  display: 'grid',
  gap: '$4',
  gridTemplateColumns: 'repeat(2, 1fr)',
  overflow: 'hidden',
  position: 'relative',
  '@supports (grid-template-rows: masonry)': {
    gridTemplateRows: 'masonry',
  },
  '@small': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    '@supports not (grid-template-rows: masonry)': {
      gridTemplateAreas: '"one one two" "one one three"',
    },
  },
  '@medium': {
    gridTemplateColumns: 'repeat(4, 1fr)',
    '@supports not (grid-template-rows: masonry)': {
      gridTemplateAreas: '"one one two three" "one one four five"',
    },
  },
});

export const ImageRemove = styled('div', {
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: '$background',
  borderRadius: '$3',
  boxShadow: '$0',
  display: 'flex',
  fontSize: '$0',
  gap: '$1',
  left: '50%',
  opacity: '0',
  padding: '$1 $3',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  transition: '$all',
  zIndex: '$front',
});

export const ImageWrapper = styled('div', {
  aspectRatio: '1 / 1',
  display: 'inline',
  flexGrow: '1',
  flexShrink: '1',
  height: '$full',
  minHeight: '3rem',
  minWidth: '3rem',
  position: 'relative',
  transition: '$all',
  width: '$full',
  '&:first-of-type': {
    gridColumn: '1 / 3',
  },
  '@small': {
    minHeight: '6rem',
    minWidth: '6rem',
    '@supports not (grid-template-rows: masonry)': {
      '&:first-of-type': {
        gridArea: 'one',
      },
    },
  },
  [`&:hover ${ImageRemove}`]: {
    opacity: '1',
  },
  [`&:hover ${ImageRemove}:hover`]: {
    boxShadow: '$1',
  },
});

export const ImageSkeleton = styled(Skeleton, {
  borderRadius: '0',
  display: 'flex',
  height: '$full',
  width: '$full',
});
