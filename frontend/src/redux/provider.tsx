'use client';

import { AppStore, makeStore } from '@/redux';
import { FC, ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
