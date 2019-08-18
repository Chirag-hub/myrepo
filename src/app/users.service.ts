import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient,private router: Router)
  { 
    name: String;
    address: String;
    city: String;
    password:String;
    email:String;
  }
  addData(name,address,city,password,email) {
      const obj = {name,address,city,password,email};
      this
          .http
          .post(`${this.url}/insert`, obj)
          .subscribe(res => console.log(res));
  }
  
  getData() {
      return(
      this
          .http
          .get(`${this.url}`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
   

    up_data(name,city, password,address,email, id) {

      const obj = {
          name: name,
          city: city,
          password: password,

          address:address,
          email:email
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
    signIn(email,password){
      const obj = {email, password};
      console.log(obj);
      this
        .http
        .post(`${this.url}/signin`,obj)
        .subscribe((res:any) => {
          if(res.message){
            alert(res.message);
          }
          else{
 
            this.router.navigateByUrl(`/dashboard/${res._id}`);
          }
        });
    }

}