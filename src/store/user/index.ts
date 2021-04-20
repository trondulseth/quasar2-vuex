import { IUserStore } from './index.types';
import { UserState } from './user.state';
import { UserMutations } from './user.mutations';
import { UserActions } from './user.actions';
import { UserGetters } from './user.getters';

export const UserStore: IUserStore = {
  state: UserState,
  mutations: UserMutations,
  actions: UserActions,
  getters: UserGetters,
};
