import { useContext } from 'react';

import { AuthContextProps, AuthContext } from '../AuthContext';

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthContext.Provider');
  }

  return context as AuthContextProps;
}
