import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { User } from 'types'

interface Props {
  user: User;
}

function UserCard(props: Props) {
  const {user} = props

  return (
    <Flex direction='row' alignItems='center' justifyContent='flex-start'>
      <Avatar name={`${user.firstName} ${user.lastName}`} src={user.avatar} />
      <Box  ml={3}>
      <Text fontWeight='semibold' fontSize='lg'>{`${user.firstName} ${user.lastName}`}</Text>
      <Text fontSize='md'>{user.email}</Text>  
      </Box>
    </Flex> 
  )
}

export default UserCard
