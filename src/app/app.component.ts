import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodolistComponent } from './todolist/todolist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CounterComponent,TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang25may';
}
