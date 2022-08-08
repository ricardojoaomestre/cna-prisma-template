import { Box, Container } from '@chakra-ui/react';

import TechStackDisplay from '@components/TechStackDisplay';
import { Hero } from '../components/Hero';

const Index = () => (
  <Box height={'100vh'} width="100%">
    <Container maxW="container.lg">
      <Box pt={'20vh'}>
        <Hero />
        <Box mt={20}>
          <TechStackDisplay />
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Index;
