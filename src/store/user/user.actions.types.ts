import { IUser } from 'src/entities';
import { StoreInterface } from '..';
import { IUserStore } from './index.types';
import { ActionContext } from 'vuex';

export type Context = ActionContext<IUserStore, StoreInterface>;
export interface IUserActions {
  setActiveUser(store: Context, payload: IUser): void;
}
