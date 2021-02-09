import { Model } from './model';
import { IUser, IUserDocument } from 'greenpeace';

export const create = async (data: IUser): Promise<IUser> => {
  const user = await new Model(data).save();
  return {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    birthdate: user.birthdate,
    navigator: user.navigator,
  };
}

export const findAll = async (): Promise<IUserDocument[]> => {
  return await Model.find();
}