import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any

  constructor(){
    this.get_cart_data();
    
    const cartData = localStorage.getItem('cartData');
    if (cartData) {
      this.cart = JSON.parse(cartData);
      console.log("order",this.cart.items);
    }
    //  else {
      //   this.cart = {customerId: '', items: []};
      //     }
      
    }
    ngOnInit(): void {
      window.scrollTo(0, 0);
    }

            addQuantity(Id: any) {
              this.cart.items.forEach((item: { product: any; quantity: number; }) => {
                // console.log("item",item.quantity);
                // console.log("id",item.product.id);
                 if (item.product.id === Id) {
                  item.quantity++;
                  localStorage.setItem('cartData', JSON.stringify(this.cart));
                  // console.log("quantity",item.quantity)
                }
              }
            )}
            subQuantity(Id: any) {
                    this.cart.items.forEach((item: { product: any; quantity: number; }) => {
                      if (item.product.id === Id) {
                        if (item.quantity > 1){
                        item.quantity--;
                        localStorage.setItem('cartData', JSON.stringify(this.cart));
              //           this.products=this.cartData[i]
              //           this.products.product_quantity=item.product_quantity
                          
              //           this.updateCartData(Id,this.products)
                
                      }
                    }
                    });
                  }
                  getProductTotal(product: any) {
                    return product.quantity * product.product.amount;
                  }
                  GST:number=0
                  Total:number=0
                  getCartTotal() {
                    let total = 0;
                    this.cart.items.forEach((item: any) => {
                      total += this.getProductTotal(item);
                      // console.log("total",total);
                      localStorage.setItem("Total",JSON.stringify(total))
                      this.GST=total*0.18;
                      this.Total=total+this.GST
                    });
                    localStorage.setItem("Totalbill",JSON.stringify(this.Total))
                    return total;
                  }
                  deleteItem(id: any) {
                    // Remove the item from the cart array
                    const index = this.cart.items.findIndex((item: { product: any }) => item.product.id === id);
                    if (index !== -1) {
                      this.cart.items.splice(index, 1);
                    }
                    
                    // Update the local storage
                    localStorage.setItem('cartData', JSON.stringify(this.cart));
                  }
                  Date(Add_number:any){
                    let today_date = new Date()
                    today_date.toLocaleDateString()
                    let Deliver_date=new Date()
                
                    if(Add_number){
                      Deliver_date.setDate(today_date.getDate()+Add_number)
                      return Deliver_date
                    }else{
                      return today_date
                    }
                  }
                   
                  // Find_Customer_Cart=localStorage.getItem("CartData.items")
                  // let customer_Cart
                  //   if(Find_Customer_Cart){
                  //     customer_Cart=JSON.parse(Find_Customer_Cart)
                  //   }
                 
                  // console.log(Find_Customer_Cart);
                  product:any 
                  productarr:any=[]      
                  get_cart_data(){
                    if(this.cart){
                      for (let i = 0; i < this.cart.items.length; i++) {
                        this.product={
                          "product_id":  this.cart.items[i].product.id,
                          "product_name": this.cart.items[i].product.title,
                          "qty": this.cart.items[i].quantity,
                          "product_amount": this.cart.items[i].product.amount,
                          "discount_type": 1,
                          "discount_amount": 10
                      }
                        this.productarr.push(this.product)
                      }
                      console.log("product",this.productarr);
                    return this.productarr

                    }
                  }
                  
                      
                  data:any
                  checkout(){
                    this.data={
                      "order_date": this.Date(0),
                      "special_note": "its special",
                      "estimate_delivery_date": this.Date(3),
                      "sub_total": this.getCartTotal(),
                      "tax_amount": this.GST,
                      "discount_amount": 10,
                      "total_amount": this.Total,
                      "paid_amount": this.Total,
                      "payment_type": 2,
                      "order_products":this.get_cart_data(),
                  }      
                  localStorage.setItem('Order_Data', JSON.stringify(this.data));
                  }
                  
                  

}
  
