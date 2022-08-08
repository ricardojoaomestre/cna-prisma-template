import { userController } from '@helpers/userController';
import { User } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;

  const getUsers = async () => {
    return userController.getAll();
  };

  const saveUser = async () => {
    const user: User = JSON.parse(req.body);
    const newUser: User = await userController.create(user);
    res.status(200).json(newUser);
  };

  switch (method) {
    case 'GET':
      return getUsers();
    case 'POST':
      return saveUser();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
