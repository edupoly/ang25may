import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import courses from './courses.json'
import { CurrencyPipe } from '@angular/common';
// Define an interface for the course object structure
interface Course {
  id: string;
  title: string;
  price: number;
  trainer: string;
  thumbnail_image: string;
  description: string;
  course_curriculum: string[];
  assignments: string[];
}

@Component({
  selector: 'app-coursedetails',
  imports: [CurrencyPipe],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.css'
})
export class CoursedetailsComponent {


  // Use @Input() to receive the course data from the parent component
  course:any=null;

  constructor(public aR:ActivatedRoute) { 
    this.aR.params.subscribe((res)=>{
      console.log(res)
      this.course=courses.find((course)=>{
        return course.id===res['id']
      })
      console.log(this.course);
      ;})
  }


}
