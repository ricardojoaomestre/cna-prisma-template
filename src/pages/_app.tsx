import { Box, ChakraProvider, Container } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgGradient="linear(to-l, bodyGradientStart, bodyGradientEnd)"
        height={'100vh'}
        width="100%"
      >
        <Container maxW="container.lg">
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
