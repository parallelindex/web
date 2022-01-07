import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';

import { supabase } from 'lib';

import { AuthContext, AuthDefaults } from './AuthContext';

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => {
      listener?.unsubscribe();
    };
  }, [supabase.auth]);

  return (
    <AuthContext.Provider value={{ ...AuthDefaults, user }}>
      {children}
    </AuthContext.Provider>
  );
}
