import { ViewIcon } from '@chakra-ui/icons';
import {
  Avatar,
  HStack,
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { User } from '@types';
import Link from 'next/link';
import React from 'react';

interface Props {
  users: User[];
}

function UserTable(props: Props) {
  const { users } = props;

  return (
    <TableContainer>
      <Table variant="simple">
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
          {users.map((user) => (
            <Tr>
              <Td>
                <Avatar size="md" name={`${user.firstName} ${user.lastName}`} src={user?.avatar} />
              </Td>
              <Td>{user.id}</Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.email}</Td>
              <Td>
                <HStack gap={2}>
                  <Link href={`/users/${user.id}`}>
                    <IconButton aria-label="User details" icon={<ViewIcon />} />
                  </Link>
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
