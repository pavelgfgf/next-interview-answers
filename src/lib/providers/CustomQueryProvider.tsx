'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';

export default function CustomQueryClientProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60, // 1 minute
          retry: 0,
        },
      },
    });
  });

  // Добавим проверку на клиентскую сторону
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
