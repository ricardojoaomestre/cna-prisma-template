import { Box, Button, Flex, Heading, HStack, Link, Text} from '@chakra-ui/react'
import { User } from '@types';
import { userController } from '@helpers/userController';
import { AddIcon, ArrowLeftIcon} from '@chakra-ui/icons';
import UserTable from '@components/UserTable';
import NextLink from 'next/link';


interface UserProps {
  users: User[];
}

function Users(props: UserProps) {
  const {users} = props;

  return (
    <Box mt={20}>
      <Box mb={6}>
        <NextLink href="/">
          <Link>
            <HStack>
              <ArrowLeftIcon />
              <Text>Back to homepage</Text>
            </HStack>
          </Link>
        </NextLink>
      </Box>
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading as="h1" mb={10}>Users from DB</Heading>
        <NextLink href="/users/addEditUser">
          <Button leftIcon={<AddIcon />} colorScheme='orange'>Create User</Button>
        </NextLink>
      </Flex>
      <UserTable users={users} />
    </Box>
  )
}

export default Users;

export const getServerSideProps = async({req}) => {

  const users = await userController.getAll();

  return {
    props: {
      users
    }
  }
}
