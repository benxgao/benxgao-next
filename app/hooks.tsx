'use client';

import { useState, useEffect } from 'react';

export function useClientOnly<T>(initialValue: T): [T, boolean] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState<T>(initialValue);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return [value, isClient];
}
