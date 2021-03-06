import { Action } from "@ngrx/store";

export const LOGIN_START = "[AUTH] LOGIN_START";
export const LOGIN = "[AUTH] LOGIN";
export const LOGOUT = "[AUTH] LOGOUT";

export class Login implements Action {
  readonly type = LOGIN;
  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type authAction = Login | Logout;
