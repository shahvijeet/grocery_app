import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseurl=environment.URL;
  addaddressurl=environment.addaddress;
  userdetailsurl=environment.userdetails;
  editaddressurl=environment.editaddress;
  deleteaddressurl=environment.deleteaddess;

  constructor(private http :HttpClient) { }

  addaddress(data:any){
    return this.http.post(this.baseurl+this.addaddressurl,data)
  }

  manageaddress(){
    return this.http.get<any>(this.baseurl+this.userdetailsurl,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
    'Access-Control-Allow-Origin': '*'})})
  }

  editaddress(data:any,id:any){
    return this.http.put(this.baseurl+this.editaddressurl,data,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
    'Access-Control-Allow-Origin': '*','address_id':id})})
  }

  deleteaddress(id:any){
    return this.http.delete(this.baseurl+this.deleteaddressurl,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
    'Access-Control-Allow-Origin': '*','address_id':id})})
  }

}
