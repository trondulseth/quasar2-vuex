import { IUser } from 'src/entities';
import { GetterTree, Store } from 'vuex';
import { StoreInterface } from '..';
import { IUserState } from './user.state.types';

export interface IUserGetters extends GetterTree<IUserState, StoreInterface> {
  getActiveUser(this: Store<IUserState>, state: IUserState): IUser | undefined;
}
