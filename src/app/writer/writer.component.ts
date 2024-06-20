import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { Store } from '@ngrx/store';
import { add } from '../../Store/Person/person.actions';
@Component({
  selector: 'app-writer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './writer.component.html',
  styleUrl: './writer.component.css'
})
export class WriterComponent {
  constructor(private store:Store){}
data:any={id:'', fname:'', lname:''};

addProduct():void{
  console.log("dispach!!")
  this.store.dispatch(add({person:this.data}))
}
}



