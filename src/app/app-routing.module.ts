import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SignupStudentComponent } from './signup-student/signup-student.component';
import { SignupTeacherComponent } from './signup-teacher/signup-teacher.component';
import { FacultyComponent } from './faculty/faculty.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'student',component:StudentComponent},
  {path:'signup-student',component:SignupStudentComponent},
  {path:'signup-teacher',component:SignupTeacherComponent},
  {path:'faculty',component:FacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }