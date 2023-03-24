import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/fea_product'
  getProduct(): Observable<any[]> {
   return this.http.get<any[]>(this.url)
  }

 
}
