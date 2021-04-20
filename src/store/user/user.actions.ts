import { IUser } from 'src/entities';
import { IUserService, UserService } from 'src/services';
import { Context, IUserActions } from './user.actions.types';

const userService: IUserService = new UserService();
// this should probably be imported and not declared here

export const UserActions: IUserActions = {
  setActiveUser(store: Context, payload: IUser): void {
    const user: IUser = userService.registerUser(payload);
    store.commit('setActiveUser', user);
  },
};
