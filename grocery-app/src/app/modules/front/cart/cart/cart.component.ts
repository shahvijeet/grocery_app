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
userid:any;
  getCartData(){
    const data=localStorage.getItem('adminRegisteredData')
         if(data){
            const data1=JSON.parse(data)
            this.userid=data1.id
          }
      this.cartservice.getToCart().subscribe(res=>{
        const cartArray = Object.values(res);
        console.log(cartArray)
      // this.cartData=cartArray.filter((item: { userId: string; }) => item.userId === this.userid);      
        this.cartData=cartArray.filter((item: { user_id: string; }) => item.user_id === this.userid);
    })

    }

    delCartData(id:any){
        this.cartservice.delToCart(id).subscribe(data=>{

        })
        this.getCartData()
    }
    products:any=[];
    addQuantity(Id: any,i:any) {
      this.cartData.forEach((item: { id: any; product_quantity: number; }) => {
        if (item.id === Id) {
          item.product_quantity++;
          // console.log(item.product_quan)
          // console.log(this.cartData)
          
        
            console.log(this.cartData[i].product_quantity,"quant")
            this.products=this.cartData[i]
          this.products.product_quantity=item.product_quantity
            
          this.updateCartData(Id,this.products)
            
        }
      });
  
  
      
    }
    subQuantity(Id: any,i:any) {
      this.cartData.forEach((item: { id: any; product_quantity: number; }) => {
        if (item.id === Id) {
          if (item.product_quantity > 0){
          item.product_quantity--;
          this.products=this.cartData[i]
          this.products.product_quantity=item.product_quantity
            
          this.updateCartData(Id,this.products)
  
        }
      }
      });
    }
  
  updateCartData(id:any,products:any){
    this.cartservice.updateCart(id,products).subscribe((res)=>{
      console.log(res)
    })
  }
  
  total(){
  const total=this.cartData.reduce((total:any, item:any) => total + item.product_quantity * item.price, 0)
  return total;
  }
  }
        
    
  