import { constants } from 'buffer';
import { createReducer, on } from '@ngrx/store';
import { loginResponse } from './auth.actions';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: any | null;
}

export const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginResponse, (state, { result }) => ({
    ...state,
    token: result.token,
    isAuthenticated: result.token ? true:false,
    user: result.data
  }))
);
