import { Actions, ofType } from "@ngrx/effects";
import * as AuthAction from "./auth.action";

export class AuthEffects {
  constructor(private actions$: Actions) {}
  authLogin = this.actions$.pipe(ofType(AuthAction.LOGIN_START));
}
