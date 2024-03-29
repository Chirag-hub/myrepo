import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  email:string;
  password:string;
  constructor(private us: UsersService) { 
    
  }

  ngOnInit() {
  }
  signIn(){
    this.us.signIn(this.email,this.password);
  }
  

}
