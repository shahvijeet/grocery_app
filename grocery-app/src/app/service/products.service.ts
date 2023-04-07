import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
   baseurl=environment.URL;
   producturl=environment.product;
   getproductbycategoryidurl=environment.productsbycategoryid;

   getproductbycategory(id:any){
      return this.http.get(this.baseurl+this.getproductbycategoryidurl,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
      'Access-Control-Allow-Origin': '*','category_id':id})})
   }
   
  getproduct(){
    return this.http.get(this.baseurl+this.producturl,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
    'Access-Control-Allow-Origin': '*'})})
  }

//  baseurl=environment.baseurl;
//   fea_producturl=environment.fea_product;



//   getProduct(): Observable<any[]> {
//    return this.http.get<any[]>(this.baseurl+this.fea_producturl)
//   }

 
}
