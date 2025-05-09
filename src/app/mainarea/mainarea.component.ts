import { Component } from '@angular/core';
import { CourselistComponent } from '../courselist/courselist.component';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainarea',
  imports: [CourselistComponent,NgFor,RouterOutlet],
  templateUrl: './mainarea.component.html',
  styleUrl: './mainarea.component.css'
})
export class MainareaComponent {

}
