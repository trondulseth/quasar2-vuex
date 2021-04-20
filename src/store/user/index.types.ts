import { IUserActions } from './user.actions.types';
import { IUserGetters } from './user.getters.types';
import { IUserMutations } from './user.mutations.types';
import { IUserState } from './user.state.types';

export interface IUserStore {
  state: IUserState;
  mutations: IUserMutations;
  actions: IUserActions;
  getters: IUserGetters;
}
