import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './to-do-item';

@Component({
  selector: 'app-to-do-items',
  standalone: true,
  imports: [],
  templateUrl: './to-do-items.component.html',
  styleUrl: './to-do-items.component.css'
})
export class ToDoItemsComponent {
  toDoItem:ToDoItem = {
    id:1,
    name:'Allo',
    isComplete: false
  };
  constructor(){}
}
