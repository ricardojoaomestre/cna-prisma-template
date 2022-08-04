import { Button, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'


export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    direction="column"
    height="100vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    textAlign="center"
  >
    <Heading fontSize="3vw">{title}</Heading>
    <Link href="/users">
      <Button colorScheme="linkedin" mt={10}>Check Users</Button>
    </Link>
  </Flex>
)
