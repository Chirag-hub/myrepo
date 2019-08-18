import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})
export class SignupStudentComponent implements OnInit {

  name;
  email;
  password;
  
  address;
  city;
  constructor(private us: UsersService) { }

  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.address,this.city,this.email,this.password);
    // console.log(this.name)
}
}

