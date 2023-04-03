import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateprofileService {
  baseurl=environment.URL;
  profileurl=environment.profile;
  constructor(private http:HttpClient) { }
   
  updateprofile(data:any){
    return this.http.put(this.baseurl+this.profileurl,data) 
  }

  }
