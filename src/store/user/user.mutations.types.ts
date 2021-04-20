import { IUser } from 'src/entities';
import { IUserState } from './user.state.types';

export interface IUserMutations {
  setActiveUser(UserState: IUserState, payload: IUser): void;
}
