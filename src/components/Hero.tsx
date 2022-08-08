import { Link, Code, Flex, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const Hero = () => (
  <Flex justifyContent="center" alignItems="center" direction="column" textAlign="center">
    <Heading
      fontSize={'8xl'}
      fontWeight={'extrabold'}
      lineHeight={'none'}
      color={'gray.900'}
      mb={8}
    >
      Create NextJs App Template
    </Heading>
    <Text fontSize={'lg'} mt={4} mb={10} color={'gray.700'}>
      A NextJS template project based on <Code>create-next-app</Code> with some pre-installed useful
      perks! Check{' '}
      <NextLink href="/users">
        <Link color={'orange'} fontWeight={'semibold'}>
          this link
        </Link>
      </NextLink>
      .
    </Text>
  </Flex>
);

export default Hero;
