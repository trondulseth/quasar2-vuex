import { IUser } from 'src/entities';
import { StateInterface } from '..';
import { IUserMutations } from './user.mutations.types';

export const userMutations: IUserMutations = {
  setActiveUser(state: StateInterface, payload: IUser): void {
    state.modules.userStore.activeUser = payload;
  },
};
