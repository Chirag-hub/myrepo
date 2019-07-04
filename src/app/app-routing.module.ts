import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
// import { StudentComponent } from './student.component';

const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'student',component:StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }