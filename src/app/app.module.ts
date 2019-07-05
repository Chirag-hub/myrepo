import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { TrainingComponent } from './training/training.component';
import { FooterComponent } from './footer/footer.component';
// import { ServicesComponent } from './services/services.component';
// import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SignupTeacherComponent } from './signup-teacher/signup-teacher.component';
import { SignupStudentComponent } from './signup-student/signup-student.component';
// import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // TrainingComponent,
    FooterComponent,
    // ServicesComponent,
    // ContactComponent,
    AboutComponent,
    StudentComponent,
    TeacherComponent,
    SignupTeacherComponent,
    SignupStudentComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }