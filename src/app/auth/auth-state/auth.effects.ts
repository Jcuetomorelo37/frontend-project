import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { login, loginResponse } from './auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private readonly store: Store,
    private authService: AuthService
  ) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          map((result) => loginResponse({ result })),
          catchError((error: any) => of(loginResponse({ result: error })))
        )
      )
    )
  );
}
