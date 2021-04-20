import { IUser } from 'src/entities';
import { IUserService, UserService } from 'src/services';
import { Context, IUserActions } from './user.actions.types';

const userService: IUserService = new UserService();
// this should probably be imported and not declared here

export const userActions: IUserActions = {
  setActiveUser(context: Context, payload: IUser): void {
    const user: IUser = userService.registerUser(payload);
    // call mutation with result from service:
    context.commit.setActiveUser(context, user);
  },
};
