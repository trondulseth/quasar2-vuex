import { IUser } from 'src/entities';
import { IUserService } from './user.types';

export class UserService implements IUserService {
  registerUser(data: IUser): IUser | any {
    const user: IUser = {
      firstname: 'Trond',
      lastname: 'Ulseth',
      email: 'trondulseth@me.com',
    };
    return user;
  }
}
