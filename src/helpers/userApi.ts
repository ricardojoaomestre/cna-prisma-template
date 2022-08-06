import { User } from "@types";

const createUser = async (user:User) => {
  const options= {
    method: 'POST',
    body: JSON.stringify(user)
  }
  const request = await fetch('/api/users', options);
  const response = await request.json();

  return response;
}

const deleteUser = async (id: number) => {
  const options= {
    method: 'DELETE',
  }
  const request = await fetch(`/api/users/${id}`, options);
  const response = await request.json();

  return response;
}

export const userApi = {
  createUser,
  deleteUser
}
