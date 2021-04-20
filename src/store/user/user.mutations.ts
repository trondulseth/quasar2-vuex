import { IUser } from 'src/entities';
import { IUserMutations } from './user.mutations.types';
import { IUserState } from './user.state.types';

export const UserMutations: IUserMutations = {
  setActiveUser(UserState: IUserState, payload: IUser): void {
    UserState.activeUser = payload;
  },
};
