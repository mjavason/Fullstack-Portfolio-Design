'use client';

import { useState } from 'react';
import { ProvidersProps } from '..';
import { AuthContext } from './context';

export default function AuthProvider({ children }: ProvidersProps) {
  const [user, setUser] = useState<
    { email: string; token: string } | undefined
  >(undefined);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
