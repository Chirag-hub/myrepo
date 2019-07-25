import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { SignupStudentComponent } from './signup-student/signup-student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FooterComponent,
    
    AboutComponent,
    StudentComponent,
    
    
    SignupStudentComponent,
    FacultyComponent,
    ContactUsComponent,
    ViewComponent,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }