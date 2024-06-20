import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { state } from "@angular/animations";


export const personState = createFeatureSelector<AppState>('persons');

export const personSelector = createSelector(
    personState,
    (state:AppState)=>state.persons
)