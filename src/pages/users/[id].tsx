import { DeleteIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Divider,
  Box,
  Text,
  useToast,
  VStack,
  HStack,
  Flex,
  Container,
} from '@chakra-ui/react';
import BaseLayout from '@components/layouts';
import AppLayout from '@components/layouts/AppLayout';
import { userApi } from '@helpers/userApi';
import { userController } from '@helpers/userController';
import { User } from '@types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

interface Props {
  user: User;
}

const UserDetails: NextPageWithLayout = (props: Props) => {
  const { user } = props;
  const toast = useToast();
  const router = useRouter();
  const completeName = `${user.firstName} ${user.lastName}`;

  const handleDeleteUser = () => {
    userApi
      .deleteUser(user.id)
      .then((response) => {
        toast({
          title: 'Delete user',
          description: 'User deleted with success!',
          status: 'success',
        });
        router.push('/users');
      })
      .catch((err) =>
        toast({
          title: 'Delete user',
          description: err.message,
          status: 'error',
        })
      );
  };

  return (
    <Box mt={32}>
      <Flex
        direction={'column'}
        bgColor="InfoBackground"
        rounded={'xl'}
        justifyContent="center"
        alignItems={'center'}
      >
        <Avatar name={completeName} src={user.avatar} size="xl" />
        <Text fontSize={'3xl'} fontWeight="semibold">
          {completeName}
        </Text>
        <Text fontSize={'lg'}>{user.email}</Text>
        <Box mt={20}>
          <HStack gap={2} justifyContent="center">
            <Button colorScheme={'red'} leftIcon={<DeleteIcon />} onClick={handleDeleteUser}>
              Delete
            </Button>
            <Link href="/users">
              <Button>Back</Button>
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

UserDetails.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <AppLayout>
        <Container maxW={'container.md'}>{page}</Container>
      </AppLayout>
    </BaseLayout>
  );
};

export default UserDetails;

export const getServerSideProps = async (context) => {
  const userId = parseInt(context.params.id as string);

  const user = await userController.getById(userId);

  return {
    props: {
      user,
    },
  };
};
