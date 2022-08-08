import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';
import { User } from '@types';
import { userController } from '@helpers/userController';
import { AddIcon } from '@chakra-ui/icons';
import UserTable from '@components/UserTable';
import NextLink from 'next/link';
import { NextPageWithLayout } from '../_app';
import BaseLayout from '@components/layouts';
import { ReactElement } from 'react';
import AppLayout from '@components/layouts/AppLayout';

interface UserProps {
  users: User[];
}

const Users: NextPageWithLayout = (props: UserProps) => {
  const { users } = props;

  return (
    <Box mt={32}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" mb={10}>
          Users from DB
        </Heading>
        <NextLink href="/users/addEditUser">
          <Button leftIcon={<AddIcon />} colorScheme="orange">
            Create User
          </Button>
        </NextLink>
      </Flex>
      <UserTable users={users} />
    </Box>
  );
};

Users.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <AppLayout>
        <Container maxW={'container.xl'}>{page}</Container>
      </AppLayout>
    </BaseLayout>
  );
};

export default Users;

export const getServerSideProps = async ({ req }) => {
  const users = await userController.getAll();

  return {
    props: {
      users,
    },
  };
};
