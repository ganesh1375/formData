import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private _http:HttpClient) { }
   registrationFrom:any;

  ngOnInit(): void {

    // this.registrationFrom=this.fb({
      
    // })
  }
  onSubmit(userForm:any)
  {
    //console.log(userForm.value);
    this.enroll(userForm).subscribe((data: any)=>console.log("success",data));

  }

  enroll(user:any):Observable<any>
  {
    return this._http.post('http://localhost:4000/data',user);
  }



}
