import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(private cartservice:CartService){
  this.getCartData();
}
cartData:any;

  getCartData(){
    this.cartservice.getToCart().subscribe(res=>{
      this.cartData=res      
     })
    }

    delCartData(id:any){
        this.cartservice.delToCart(id).subscribe(data=>{

        })
        this.getCartData()
    }
    quantityitem:number=1;
    counter(type:string){
      if(type === "add"){
        this.cartData[0].quantityitem++;
      } else if(type === "minus" && this.cartData[0].quantityitem > 1){
        this.cartData[0].quantityitem--;
      }
    }
  }
        
    
    
  //   count=1
  //   counter(type:string){
  //     type=="add" ? this.count++ : this.count--;
  //   }
  