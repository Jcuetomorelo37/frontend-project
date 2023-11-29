import { createAction, props } from "@ngrx/store";

export const login = createAction('[login] loginIn', props<{ email: string, password: string }>());
export const loginResponse = createAction('[login] loginResponse', props<{result: any}>())

