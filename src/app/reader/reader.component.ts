import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../Model/person';
import { Store, select } from '@ngrx/store';
import { personSelector } from '../../Store/Person/person.selector';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css'
})
export class ReaderComponent implements OnInit{
  person:any[] | undefined;
  personObervable:Observable<Person[]> | undefined
  constructor(private store:Store){}
  ngOnInit(): void {
    this.personObervable = this.store.pipe(select(personSelector))
    this.personObervable.subscribe((data)=>this.person=data)
  }

  Remove(id:number):void{
    
  }
}
