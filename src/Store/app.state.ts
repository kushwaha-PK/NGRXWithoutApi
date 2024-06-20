import { Person } from "../Model/person";

// import { Product } from "../Models/product";

export interface AppState{

  persons:Person[];

//   productSelector:Product[];

}

export const initialState:AppState={
    persons: [{id:1,fname:"Pooja",lname:"kushwaha"}]
}