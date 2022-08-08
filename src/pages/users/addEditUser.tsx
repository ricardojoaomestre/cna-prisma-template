import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  useToast,
} from '@chakra-ui/react';
import { userApi } from '@helpers/userApi';
import { User } from '@types';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import BaseLayout from '@components/layouts';
import AppLayout from '@components/layouts/AppLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

interface Props {
  id?: number;
}

const AddEditUser: NextPageWithLayout = (props: Props) => {
  const { id } = props;
  const isCreateUser = !id;
  const toast = useToast();
  const router = useRouter();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const handleOnSubmit = (values: User) => {
    userApi
      .createUser(values)
      .then((response) => {
        toast({
          title: 'Create user',
          description: 'User created with success!',
          status: 'success',
        });
        router.push('/users');
      })
      .catch((err) =>
        toast({
          title: 'Create user',
          description: err.message,
          status: 'error',
        })
      );
  };

  return (
    <Box mt={32}>
      <Heading as="h2" fontSize={'3xl'} mb={10}>
        {isCreateUser ? 'New User' : 'Edit User'}
      </Heading>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <Form>
          <Box mb={4}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Field as={Input} id="firstName" name="firstName" />
          </Box>
          <Box mb={4}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Field as={Input} id="lastName" name="lastName" />
          </Box>
          <Box mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Field as={Input} id="email" name="email" />
          </Box>
          <HStack gap={2}>
            <Button type="submit" colorScheme={'green'}>
              Save
            </Button>
            <Link href="/users">
              <Button type="button" colorScheme={'gray'}>
                Cancel
              </Button>
            </Link>
          </HStack>
        </Form>
      </Formik>
    </Box>
  );
};

AddEditUser.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <AppLayout>
        <Container maxW={'container.md'}>{page}</Container>
      </AppLayout>
    </BaseLayout>
  );
};

export default AddEditUser;
