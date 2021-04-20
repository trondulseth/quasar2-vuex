import { IUser } from './user.types';

export class User implements IUser {
  firstname: string;
  lastname: string;
  email: string;

  constructor(data: IUser) {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
  }
}
