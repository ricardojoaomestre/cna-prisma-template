import { ChakraProvider } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import theme from 'src/theme';

interface Props {
  children: ReactJSXElement | ReactJSXElement[];
}

function BaseLayout(props: Props) {
  const { children } = props;

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default BaseLayout;
