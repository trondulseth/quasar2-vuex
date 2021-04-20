import { IUser } from 'src/entities';
import { ActionContext, ActionTree, Store } from 'vuex';
import { StateInterface } from '..';
import { IUserStore } from './user.state.types';

export type Context = ActionContext<IUserStore, StateInterface>;

export interface IUserActions extends ActionTree<IUserStore, StateInterface> {
  setActiveUser(
    this: Store<StateInterface>,
    context: Context,
    payload: IUser
  ): void;
}
