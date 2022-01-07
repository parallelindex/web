import { styled } from '../../stitches.config';

export const Checkbox = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  fontSize: '$0',
  fontWeight: '$400',
  gap: '$2',
  justifyContent: 'flex-start',
  p: {
    lineHeight: '$body',
    textAlign: 'left',
  },
});

const fieldStyles = {
  backgroundColor: '$grey50',
  border: '1px solid $colors$grey100',
  borderRadius: '$0',
  boxSizing: 'border-box',
  fontFamily: '$body',
  fontSize: '$1',
  lineHeight: '$body',
  padding: '$2',
  transition: '$colors',
  '&:focus': {
    backgroundColor: '$background',
  },
  '&::placeholder': {
    color: '$grey600',
  },
};

const inlineFieldStyles = {
  backgroundColor: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  fontFamily: '$body',
  fontSize: '$1',
  flexShrink: '2',
  lineHeight: '$body',
  padding: '0',
  transition: '$colors',
  width: '100%',
  '&:focus': {
    backgroundColor: 'transparent',
    outline: 'none',
  },
  '&::placeholder': {
    color: '$grey600',
  },
};

export const Password = styled('div', {
  ...fieldStyles,
  alignItems: 'center',
  display: 'flex',
  gap: '$2',
  justifyContent: 'space-between',
  input: inlineFieldStyles,
});

export const Select = styled('select', {
  ...fieldStyles,
  backgroundColor: '$background',
  borderColor: ' transparent',
  boxShadow: '$0',
  cursor: 'pointer',
  fontWeight: '$400',
  transition: '$shadow',
  '&:hover': {
    boxShadow: '$1',
  },
  span: {
    display: 'flex',
  },
});

export const Textarea = styled('textarea', {
  ...fieldStyles,
  maxWidth: '$full',
  minWidth: '$full',
});

export const Textbox = styled('input', fieldStyles);

export const ToggleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$2',
});

const tipStyles = {
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$0',
  color: '$grey700',
  cursor: 'pointer',
  display: 'flex',
  flexShrink: '0',
  margin: '-$0',
  padding: '$1',
  transition: '$colors',
  svg: {
    height: '1rem',
    width: '1rem',
  },
};

export const Tip = styled('div', tipStyles);

export const Toggle = styled('button', {
  ...tipStyles,
  '&:hover': {
    backgroundColor: '$grey100',
    color: '$grey800',
  },
  '&:active': {
    backgroundColor: '$grey200',
    color: '$grey900',
  },
});
