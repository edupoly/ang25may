import { Component } from '@angular/core';
import courses from './courses.json'
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-courselist',
  imports: [NgFor,RouterLink],
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
  allcourses = courses;
}
