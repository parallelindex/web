import { createContext } from 'react';
import type { User } from '@supabase/supabase-js';

import { supabase } from 'lib';

export interface AuthContextProps {
  signUp;
  signIn;
  signOut;
  user: User | null;
}

export const AuthDefaults = {
  signUp: (data) => supabase.auth.signUp(data),
  signIn: (data) => supabase.auth.signIn(data),
  signOut: () => supabase.auth.signOut(),
  user: null,
};

export const AuthContext = createContext<AuthContextProps>(AuthDefaults);
