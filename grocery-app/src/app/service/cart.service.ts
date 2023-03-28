import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carturl='http://localhost:3000/cart'
  constructor(private http:HttpClient) { }

getToCart(){
  return this.http.get(this.carturl)
}

  addToCart(body:any):Observable<any[]>{
    return this.http.post<any[]>(this.carturl,body)
   }

   delToCart(id:any){
    return this.http.delete(this.carturl+"/"+id)
   }
   updateCart(id:any,products:any){
    return this.http.put(this.carturl+"/"+id,products)
   }
}
