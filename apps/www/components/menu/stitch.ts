import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled } from 'ui';

export const MenuContent = styled(DropdownMenu.Content, {
  backgroundColor: '$background',
  borderRadius: '$1',
  boxShadow: '$1',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '12rem',
  overflow: 'hidden',
  zIndex: '$top',
  a: {
    alignItems: 'center',
    color: '$grey800',
    display: 'flex',
    fontWeight: '$500',
    gap: '0.75rem',
    margin: '0',
    padding: '$2 $4',
    paddingLeft: '$3',
    position: 'relative',
    transition: '$all',
    width: '$full',
    '&:hover': {
      backgroundColor: '$grey100',
      color: '$grey900',
      span: {
        backgroundColor: '$grey200',
      },
      svg: {
        color: '$grey600',
      },
      '> svg': {
        color: '$foreground',
      },
    },
    '&:focus': {
      outline: 'none',
    },

    '&:focus-visible': {
      border: '1px solid $colors$foreground',
    },
    span: {
      backgroundColor: '$grey100',
      borderRadius: '$3',
      display: 'flex',
      padding: '$2',
      transition: '$all',
    },
    svg: {
      color: '$grey500',
      height: '1.5rem',
      transition: '$all',
      width: '1.5rem',
    },
    '> svg': {
      color: '$grey900',
      height: '1.25rem',
      marginLeft: 'auto',
      width: '1.25rem',
    },
  },
});

export const MenuTrigger = styled(DropdownMenu.Trigger, {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$3',
  cursor: 'pointer',
  display: 'flex',
  outline: '2px solid transparent',
  padding: '0',
  transition: '$all',
  '&:hover': {
    opacity: '0.75',
  },
  '&:focus-visible': {
    outline: '2px solid $colors$foreground',
  },
});
