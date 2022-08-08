import { userController } from '@helpers/userController';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;

  const getUserById = async () => {
    const userId = parseInt(req.query.id as string);
    return userController.getById(userId);
  };

  const deleteUser = async () => {
    const userId = parseInt(req.query.id as string);
    const result = await userController.delete(userId);
    res.status(200).json(result);
  };

  switch (method) {
    case 'GET':
      return getUserById();
    case 'DELETE':
      return deleteUser();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
