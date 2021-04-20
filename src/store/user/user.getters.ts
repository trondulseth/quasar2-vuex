import { IUser } from 'src/entities';
import { IGetters } from './user.getters.types';
import { IUserStore } from './user.state.types';

export const getters: IGetters = {
  getActiveUser(state: IUserStore): IUser | undefined {
    const data = state.activeUser;
    if (!data) {
      return;
    }
    return state.activeUser;
  },
};
