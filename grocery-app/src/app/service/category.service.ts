import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseurl = environment.URL;
  categoryurl = environment.category;

  constructor(private http : HttpClient) { }

  getcategory(){
    return this.http.get(this.baseurl+this.categoryurl,
      {headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
      'Access-Control-Allow-Origin': '*'})});
  }
}
