import { IUser } from "src/entities";

export interface IUserService {
  registerUser(data: IUser): IUser;
}
