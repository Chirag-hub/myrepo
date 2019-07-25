import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';

import { SignupStudentComponent } from './signup-student/signup-student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'',component:AboutComponent},
  {path:'student',component:StudentComponent},
  {path:'signup-student',component:SignupStudentComponent},
  {path:'view',component:ViewComponent},
  {path:'faculty',component:FacultyComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }