import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  arr;
  
 //name
  constructor(private us:UsersService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
     this.us.getData().subscribe(data=>{this.arr=data;});
  }
  delData(id){
    this.us.delData(id);
  }
 

}
