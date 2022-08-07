import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface Props {
  title: string;
  subtitle?: string;
}

export const Hero = (props: Props) => {
  const {title, subtitle} = props;
  return (
  <Flex
    justifyContent="center"
    alignItems="center"
    direction="column"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    textAlign="center"
  >
    <Heading fontSize={'6xl'}>{title}</Heading>
    <Text fontSize={'xl'} color={'gray.500'}>{subtitle}</Text>
    <Link href="/users">
      <Button colorScheme="messenger" mt={10}>Check Users</Button>
    </Link>
  </Flex>
)
  }
