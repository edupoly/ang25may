import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todos=["get loans cleared",'pay moksha dance fee','pay rent','pay emi'];
  newtodo="";
  addTodo(){
    this.todos.push(this.newtodo)
  }
}
