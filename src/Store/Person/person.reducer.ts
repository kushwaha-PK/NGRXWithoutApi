
import { createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "../app.state";
import { add, remove } from "./person.actions";
import { state } from "@angular/animations";
import { stat } from "fs";

export const personReducer = createReducer(
    initialState,
    on(add,(state: AppState,{person}:any)=>{
        console.log("add redcer called !!",JSON.stringify(person))
        return{
          ...state,persons:[...state.persons,person]
        }
      }),

      on(remove,(state,{pid})=>(
        {
            ...state,
            persons:state.persons.filter((p)=>p.id!=p.id)
        }
      ))
    //   on(remove,(state,{id}=>({
    //     ...state,
    //     persons:state.persons.filter((p)=>p.id!= p.id)
    //   }))
)