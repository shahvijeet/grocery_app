import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {
  baseurl=environment.URL;
  changepasswordurl=environment.changepassword;

  constructor(private http:HttpClient) {
  }
    changepassword(data:any){
      return this.http.put(this.baseurl+this.changepasswordurl,data)
          }
}


