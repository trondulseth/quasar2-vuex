import { IUser } from 'src/entities';

export interface IUserState {
  activeUser: IUser | undefined;
}
