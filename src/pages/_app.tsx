import { ChakraProvider, Container } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container>
      <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
