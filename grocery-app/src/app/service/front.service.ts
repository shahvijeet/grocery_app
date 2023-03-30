import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FrontService {
  baseurl=environment.baseurl;
  usersignupurl=environment.usersignup;
  userloginurl=environment.userlogin;
  mainurl=environment.URL;
  registerurl=environment.register;
  loginurl=environment.login;

constructor(private http:HttpClient)
  { }
  usersignup(data:UserModel){
    return this.http.post<UserModel>(this.mainurl+this.registerurl,data)
  }
  userlogin(data:any){
    return this.http.post(this.mainurl+this.loginurl,data)
  }
  usergetsignup(){
    return this.http.get<any[]>(this.mainurl+this.loginurl)
  }
}
