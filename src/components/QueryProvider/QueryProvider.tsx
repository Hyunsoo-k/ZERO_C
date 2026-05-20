"use client";

import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const QUERY_CLIENT = new QueryClient();

type Props = {
  children: ReactNode
};

export const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      {children}
    </QueryClientProvider>
  );
};