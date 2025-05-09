import { Routes } from '@angular/router';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CareersComponent } from './careers/careers.component';

export const routes: Routes = [
    {
        path:"",
        component:CourselistComponent
    },
    {
        path:"courseDetails/:id",
        component:CoursedetailsComponent
    },
    {
        path:"careers",
        component:CareersComponent
    }
];
