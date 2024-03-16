'use client';

import { ComponentProps } from '@/types/component-props';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface QueryProviderProps extends ComponentProps {}

export const ReactQueryClientProvider = ({ children }: QueryProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
