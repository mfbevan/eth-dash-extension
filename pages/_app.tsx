import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { theme } from "../styles/theme";
import { Metadata } from "../providers";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Metadata />
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
