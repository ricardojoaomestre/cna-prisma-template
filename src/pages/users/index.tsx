import { Avatar, Box, Flex, Grid, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client';
import React from 'react'
import { User } from 'types';

interface UserProps {
  users: User[];
}

function Users(props: UserProps) {
  const {users} = props;
  return (
    <Box mt={40}>
      <Heading as="h1" mb={10}>Users from DB</Heading>
      <Grid gap={6}>
        {users.map(user => 
            <Flex direction='row' alignItems='center' justifyContent='flex-start'>
              <Avatar name={`${user.firstName} ${user.lastName}`} src={user.avatar} />
              <Box  ml={3}>
              <Text fontWeight='semibold' fontSize='lg'>{`${user.firstName} ${user.lastName}`}</Text>
              <Text fontSize='md'>{user.email}</Text>  
              </Box>
            </Flex>          
        )}
      </Grid>    
    </Box>
  )
}

export default Users;

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany();

  return {
    props: {
      users
    }
  }
}
