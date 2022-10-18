import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../theme";

import "../styles/global.css";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  const displayName = Component?.displayName ?? "Page";

  return (
    <ChakraProvider theme={theme}>
      <Meta title={displayName} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
