"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; 
import { ToastContainer } from "react-toastify";
export default function TestProvider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-right" autoClose={3000} />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}
