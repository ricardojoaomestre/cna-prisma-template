import Header from '@components/Header';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';

interface Props {
  children: ReactJSXElement | ReactJSXElement[];
}

function AppLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default AppLayout;
