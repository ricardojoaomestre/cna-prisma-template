import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { Box, Container } from '@chakra-ui/react';
import Hero from '@components/Hero';
import TechStackDisplay from '@components/TechStackDisplay';
import BaseLayout from '@components/layouts';

const Page: NextPageWithLayout = () => (
  <Box height={'100vh'}>
    <Box pt={'20vh'}>
      <Hero />
      <Box mt={20}>
        <TechStackDisplay />
      </Box>
    </Box>
  </Box>
);

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <Container maxW={'container.lg'}>{page}</Container>
    </BaseLayout>
  );
};

export default Page;
