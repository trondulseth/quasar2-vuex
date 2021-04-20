import { IUser } from 'src/entities';
import { MutationTree, Store } from 'vuex';
import { StateInterface } from '..';

export interface IUserMutations extends MutationTree<StateInterface> {
  setActiveUser(
    this: Store<StateInterface>,
    state: StateInterface,
    payload: IUser
  ): void;
}
