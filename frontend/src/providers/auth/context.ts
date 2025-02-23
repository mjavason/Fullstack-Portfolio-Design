import { createContext } from 'react';

// Define the type for the context
interface AuthContextType {
  user: { email: string; token: string } | undefined;
  setUser: (user: { email: string; token: string } | undefined) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
