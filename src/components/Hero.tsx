import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  title: string;
  subtitle?: string;
}

export const Hero = (props: Props) => {
  const { title, subtitle } = props;
  return (
    <Flex justifyContent="center" alignItems="center" direction="column" textAlign="center">
      <Heading fontSize={'6xl'}>{title}</Heading>
      <Text fontSize={'xl'} mt={4} mb={14} color={'gray.700'}>
        {subtitle}
      </Text>
      <Link href="/users">
        <Button size={'lg'} colorScheme="blackAlpha">
          Check Users
        </Button>
      </Link>
    </Flex>
  );
};
