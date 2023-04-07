import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateprofileService {
  baseurl=environment.URL;
  profileurl=environment.profile;
  getprofileurl=environment.userdetails;
  constructor(private http:HttpClient) { }
   
  updateprofile(data:any){
    return this.http.put(this.baseurl+this.profileurl,data) 
  }

  getprofile(){
    return this.http.get(this.baseurl+this.getprofileurl,
      {headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
      'Access-Control-Allow-Origin': '*'})})
  }

  }
