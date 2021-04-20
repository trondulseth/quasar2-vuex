import { IUser } from 'src/entities';
import { GetterTree, Store } from 'vuex';
import { StateInterface } from '..';
import { IUserStore } from './user.state.types';

export interface IGetters extends GetterTree<IUserStore, StateInterface> {
  getActiveUser(this: Store<IUserStore>, state: IUserStore): IUser | undefined;
}
