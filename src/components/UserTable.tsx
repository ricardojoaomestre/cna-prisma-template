import { DeleteIcon } from '@chakra-ui/icons';
import { Avatar, IconButton, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { User } from '@types'
import React from 'react'

interface Props {
  users: User[];
  onDelete: (id: number) => void;
}

function UserTable(props: Props) {
  const {users, onDelete} = props

  return (
    <TableContainer>
        <Table variant='simple'>
          <TableCaption>Users in sqlite Database fetched using prisma</TableCaption>
          <Thead>
            <Tr>
              <Th>Avatar</Th>
              <Th>Id</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map(user => (
              <Tr>
                <Td><Avatar size='md' name={`${user.firstName} ${user.lastName}`} src={user?.avatar} /></Td>
                <Td>{user.id}</Td>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.email}</Td>
                <Td><IconButton aria-label='Delete user' icon={<DeleteIcon />} onClick={() => onDelete(user.id)} /></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
  )
}

export default UserTable
