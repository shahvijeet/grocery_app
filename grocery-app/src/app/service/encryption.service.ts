import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
   baseurl=environment.URL;
   encryptionurl=environment.encryption;      
  constructor(private http:HttpClient) { }

  encryption(id:any){
    return this.http.get(this.baseurl+this.encryptionurl,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
    'Access-Control-Allow-Origin': '*','id':id})})
  }
}
