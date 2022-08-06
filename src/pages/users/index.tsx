import { Box, Button, Flex, Heading, useToast} from '@chakra-ui/react'
import { User } from '@types';
import { userController } from '@helpers/userController';
import { userApi } from '@helpers/userApi';
import { AddIcon} from '@chakra-ui/icons';
import UserTable from '@components/UserTable';


interface UserProps {
  users: User[];
}

function Users(props: UserProps) {
  const {users} = props;
  const toast = useToast();

  const handleCreateUser = () => {
    const firstName = window.prompt('First Name');
    const lastName = window.prompt('Last Name');
    const email = window.prompt('Email');

    const newUser: User = {
      firstName,
      lastName,
      email
    }

    userApi.createUser(newUser)
    .then(response => toast({
      title: 'Create user',
      description: 'User created with success!',
      status: 'success'
    }))
    .catch(err => toast({
      title: 'Create user',
      description: err.message,
      status: 'error'
    }))

  }

  const handleDeleteUser = (id: number) => {
    userApi.deleteUser(id)
    .then(response => toast({
      title: 'Delete user',
      description: 'User deleted with success!',
      status: 'success'
    }))
    .catch(err => toast({
      title: 'Delete user',
      description: err.message,
      status: 'error'
    }))
  }

  return (
    <Box mt={20}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading as="h1" mb={10}>Users from DB</Heading>
        <Button leftIcon={<AddIcon />} colorScheme='orange' onClick={handleCreateUser}>Create User</Button>
      </Flex>
      <UserTable users={users} onDelete={(id: number) => handleDeleteUser(id)} />
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
