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
import { FacultyComponent } from './faculty/faculty.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
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
    FacultyComponent,
    LoginAdminComponent,
    ContactUsComponent,
    AdminComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }