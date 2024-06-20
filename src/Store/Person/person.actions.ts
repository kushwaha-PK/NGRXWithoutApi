import { createAction,props } from "@ngrx/store";
import { Person } from "../../Model/person";

export const add = createAction('[Person] Add',props<{person:Person}>());

export const remove = createAction('[Person] Remove',props<{pid:number}>());

export const clear = createAction('[Person] Clear');