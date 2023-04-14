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
  getorderurl=environment.getorderbyid;
  allorderurl=environment.getcustomerallorders;

  constructor(private http:HttpClient) { }

getToCart(order_id:any){
  return this.http.get(this.baseurl+this.getorderurl,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
  'Access-Control-Allow-Origin': '*', 'order_id':order_id})})
}

  addToCart(body:any,delivery_address_id:any,billing_address_id:any,payment_status:any,order_status:any):Observable<any[]>{
    return this.http.post<any[]>(this.baseurl+this.addtocarturl,body,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
    'Access-Control-Allow-Origin': '*','delivery_address_id': delivery_address_id,'billing_address_id':billing_address_id,
    'payment_status':payment_status,'order_status':order_status})})
   }

   Get_Customer_All_Orders(){
    return this.http.get(this.baseurl+this.allorderurl,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
    'Access-Control-Allow-Origin': '*'})})
   }
}
