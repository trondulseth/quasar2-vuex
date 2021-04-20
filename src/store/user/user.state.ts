import { IUserStore } from './user.state.types';

function state(): IUserStore {
  return {
    activeUser: undefined,
  };
}

export default state;
