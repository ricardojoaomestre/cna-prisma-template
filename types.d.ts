import { IconType } from 'react-icons/lib';

export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
};

export type TechInfo = {
  name: string;
  icon: IconType;
  link: string;
};
