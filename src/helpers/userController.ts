import {prisma} from 'db';
import { User } from "@types";

const AVATAR_API="https://avatars.dicebear.com/api/bottts/";

const getAll = async () => {
  const users = await prisma.user.findMany();

  return users;
}

const getById = async(id) => {

  const user = await prisma.user.findUnique({where: {id: id}})

  return user;
}

const create = async (user: User) => {
  
  const cleanString = (str: string): string => {
    if (!str || str === "") return "";
    return str.toLowerCase().replaceAll(/[^A-Za-z0-9_-]/gi,"");
  }

  // generate avatar url
  const username = cleanString(`${user.firstName}_${user.lastName}`);
  user.avatar = `${AVATAR_API}${username}.svg`;
  
  const newUser = await prisma.user.create({
    data: user
  });

  return newUser;
}

const update = async (id: number, user: User) => {
  const updUser = await prisma.user.update({data: user, where: {id: id}})
  return updUser;
}

const _delete = async (id) => {
  const delUser = await prisma.user.delete({where: {id: id}});

  return delUser;
}


export const userController = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
}
