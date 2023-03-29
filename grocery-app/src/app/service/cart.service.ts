import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseurl=environment.baseurl;
  carturl=environment.cart;
  constructor(private http:HttpClient) { }

getToCart(){
  return this.http.get(this.baseurl+this.carturl)
}

  addToCart(body:any):Observable<any[]>{
    return this.http.post<any[]>(this.baseurl+this.carturl,body)
   }

   delToCart(id:any){
    return this.http.delete(this.baseurl+this.carturl+"/"+id)
   }
   updateCart(id:any,products:any){
    return this.http.put(this.baseurl+this.carturl+"/"+id,products)
   }
}
