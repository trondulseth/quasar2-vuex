import { IUser } from 'src/entities';
import { IUserGetters } from './user.getters.types';
import { IUserState } from './user.state.types';

export const UserGetters: IUserGetters = {
  getActiveUser(state: IUserState): IUser | undefined {
    const data = state.activeUser;
    if (!data) {
      return;
    }
    return state.activeUser;
  },
};
