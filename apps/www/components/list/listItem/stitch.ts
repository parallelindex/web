import Skeleton from 'react-loading-skeleton';
import { IoOpenOutline } from 'react-icons/io5';

import { styled } from 'ui';

const Description = styled('span', {
  color: '$grey500',
  fontSize: '$0',
  fontWeight: '$400',
  lineHeight: '$body',
});

const Icon = styled(IoOpenOutline, {
  height: '1.25rem',
  position: 'absolute',
  opacity: '0',
  right: '$4',
  transition: '$all',
  width: '1.25rem',
});

const link = {
  alignItems: 'center',
  border: '1px solid $colors$grey200',
  borderRadius: '$0',
  cursor: 'pointer',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  margin: '0',
  padding: '$2',
  position: 'relative',
  transition: '$all',
  width: '$full',
  '&:hover': {
    backgroundColor: '$grey200',
  },
  [`&:hover ${Icon}`]: {
    opacity: '1',
  },
  '&:focus-visible': {
    border: '1px solid $colors$foreground',
  },
  variants: {
    inline: {
      true: {
        border: 'none',
        borderBottom: '1px solid $colors$grey200',
        borderRadius: '0',
      },
    },
  },
};

const LinkAnchor = styled('a', link);

const LinkBlock = styled('div', link);

const LinkSkeleton = styled(Skeleton, {
  alignItems: 'center',
  borderRadius: '$0',
  display: 'flex',
  padding: '$6',
  width: '$full',
});

const Logo = styled('span', {
  borderRadius: '$half',
  height: '3rem',
  overflow: 'hidden',
  position: 'relative',
  width: '3rem',
});

const Info = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '$none',
});

const ListItemStitch = {
  Description,
  Icon,
  LinkAnchor,
  LinkBlock,
  LinkSkeleton,
  Logo,
  Info,
};

export default ListItemStitch;
