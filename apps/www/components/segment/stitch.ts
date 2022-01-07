import * as Tabs from '@radix-ui/react-tabs';

import { styled } from 'ui';

const TabsRoot = styled(Tabs.Root, {
  width: '$full',
});

const TabsList = styled(Tabs.List, {
  backgroundColor: '$grey100',
  borderRadius: '$full',
  boxShadow: '$inset',
  display: 'flex',
  gap: '$1',
  margin: '0 auto',
  padding: '$1',
  width: '16rem',
});

const TabsTrigger = styled(Tabs.Trigger, {
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$full',
  boxShadow: 'none',
  color: '$grey500',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: '$body',
  fontWeight: '$500',
  justifyContent: 'center',
  padding: '$2 $4',
  transition: '$all',
  width: '$half',
  '&:hover': {
    color: '$grey600',
  },
  '&[aria-selected="true"]': {
    backgroundColor: '$background',
    boxShadow: '$0',
    color: '$foreground',
  },
});

const SegmentStitch = {
  TabsRoot,
  TabsList,
  TabsTrigger,
};

export default SegmentStitch;
