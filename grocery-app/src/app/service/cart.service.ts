import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  baseurl=environment.URL;
  addtocarturl=environment.addorder;
  carturl=environment.getorderbyid;


  constructor(private http:HttpClient) { }

getToCart(){
  return this.http.get(this.baseurl+this.carturl)
}

  addToCart(body:any,delivery_address_id:any,billing_address_id:any,payment_status:any,order_status:any):Observable<any[]>{
    return this.http.post<any[]>(this.baseurl+this.addtocarturl,body,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
    'Access-Control-Allow-Origin': '*','delivery_address_id': delivery_address_id,'billing_address_id':billing_address_id,
    'payment_status':payment_status,'order_status':order_status})})
   }

   delToCart(id:any){
    return this.http.delete(this.baseurl+this.carturl+"/"+id)
   }
   updateCart(id:any,products:any){
    return this.http.put(this.baseurl+this.carturl+"/"+id,products)
   }
}
