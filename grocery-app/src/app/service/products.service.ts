import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
 baseurl=environment.baseurl;
  fea_producturl=environment.fea_product;
  
  getProduct(): Observable<any[]> {
   return this.http.get<any[]>(this.baseurl+this.fea_producturl)
  }

 
}
