import { Box, Button, FormLabel, Heading, HStack, Input, Link, Text, useToast } from "@chakra-ui/react"
import { userApi } from "@helpers/userApi";
import { User } from "@types";
import {Formik, Form, Field} from 'formik';
import { useRouter } from "next/router";
import NextLink from 'next/link';
import { ArrowLeftIcon } from "@chakra-ui/icons";

interface Props {
  id?: number;
}

function AddEditUser(props: Props) {
  const {id} = props;
  const isCreateUser = !id;
  const toast = useToast();
  const router = useRouter();
  
  const initialValues = {
    firstName: '',
    lastName: '',
    email: ''  
  }

  const handleOnSubmit = (values: User) => {
    userApi.createUser(values)
    .then(response => {
      toast({
        title: 'Create user',
        description: 'User created with success!',
        status: 'success'
      })
      router.push('/users');
    })
    .catch(err => toast({
      title: 'Create user',
      description: err.message,
      status: 'error'
    }))
  }

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
      <Heading as="h2" fontSize={'3xl'} mb={10}>{isCreateUser ? 'New User' : 'Edit User'}</Heading>
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
          <Button type="submit" colorScheme={'green'}>Save</Button>
          <Link href="/users">
            <Button type="button" colorScheme={'gray'}>Cancel</Button>
          </Link>
          </HStack>
        </Form>
      </Formik>
    </Box>
  )
}

export default AddEditUser
