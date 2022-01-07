import { IoSearch } from 'react-icons/io5';

import { styled } from 'ui';

const Form = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 'auto',
  maxWidth: '25rem',
  position: 'relative',
  width: '$full',
});

const Icon = styled(IoSearch, {
  color: '$grey500',
  height: '1.25rem',
  marginLeft: '$3',
  position: 'absolute',
  width: '1.25rem',
});

const Input = styled('input', {
  appearance: 'none',
  backgroundColor: '$background',
  border: 'none',
  borderRadius: '$full',
  boxShadow: '$1',
  fontFamily: '$body',
  fontSize: '$2',
  height: '3rem',
  margin: '0 auto',
  padding: '$4 $7',
  paddingLeft: '$8',
  transition: 'all 0.2s ease-out',
  width: '$full',
  '&:hover, &:focus': {
    boxShadow: '$2',
  },
});

const Result = styled('div', {
  backgroundColor: '$background',
  borderRadius: '$0',
  boxShadow: '$modal',
  maxHeight: '50vh',
  overflow: 'hidden',
  overflowY: 'scroll',
  position: 'absolute',
  scrollbarWidth: 'none',
  top: '$9',
  width: '$full',
  zIndex: '$top',
  '&::-webkit-scrollbar': {
    width: '0',
  },
});

const Results = styled('ul', {
  gap: '0',
  gridTemplateColumns: '1fr',
});

const NoResults = styled('div', {
  alignItems: 'center',
  display: 'flex',
  fontWeight: '$500',
  justifyContent: 'center',
  padding: '$6',
});

export const SearchStitch = {
  Form,
  Icon,
  Input,
  Result,
  Results,
  NoResults,
};
