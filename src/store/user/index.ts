import { Module } from 'vuex';
import { StateInterface } from '../index';
import state from './user.state';
import { IUserStore } from './user.state.types';

const userStore: Module<IUserStore, StateInterface> = {
  namespaced: true,
  state,
};

export default userStore;
