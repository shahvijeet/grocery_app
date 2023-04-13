import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  constructor(){
    // this.getCartData();

    const cartData = localStorage.getItem('cartData');
    if (cartData) {
      this.cart = JSON.parse(cartData);
      console.log("order",this.cart.items);
    }
    //  else {
    //   this.cart = {customerId: '', items: []};
    //     }

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
                  getCartTotal() {
                    let total = 0;
                    this.cart.items.forEach((item: any) => {
                      total += this.getProductTotal(item);
                      // console.log("total",total);
                      localStorage.setItem("Total",JSON.stringify(total))
                    });
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
                  checkout(){
                          
                  }
                  
                  

}
  
