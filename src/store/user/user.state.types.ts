import { IUser } from 'src/entities';

export interface IUserStore {
  activeUser: IUser | undefined;
}
