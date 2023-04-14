import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { AddressService } from 'src/app/service/address.service';
import { CartService } from 'src/app/service/cart.service';
import { EncryptionService } from 'src/app/service/encryption.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  addresses: any[] = [];
  total:any
  body :any ;
  cart:any;
  constructor(private router:Router, private address:AddressService , 
    private cartservice:CartService,private encrypt:EncryptionService,
    private toast:ToastrService) { 
    const totalData = localStorage.getItem('Totalbill');
    if (totalData) {
      this.total = JSON.parse(totalData);
      console.log("Total bill",this.total);
    }
    const orderdata = localStorage.getItem('Order_Data');
    if (orderdata) {
      this.body = JSON.parse(orderdata);
      console.log("order-checkout",this.body);
    }
    const cartData = localStorage.getItem('cartData');
    if (cartData) {
      this.cart = JSON.parse(cartData);
      console.log("order",this.cart.items);
    }

  }

  ngOnInit() {
    
    window.scrollTo(0, 0);
    this.address.manageaddress().subscribe({
      next:(res:any)=>{
        console.log(res); // log the entire response object
        this.addresses = res.data.addresses;
        console.log(this.addresses);
    },
    error:(err: any)=>{
      console.log(err);
    }
  })
  

  }
  encryption_data:any;
  
encryption(id:any){
  this.encrypt.encryption(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.encryption_data = res.data;
      console.log(this.encryption_data);
      }
  })


}

 
 delivery_address_id :any;
 billing_address_id :any ;
 payment_status:any="W4YV_pkH7OAkvZO4P1gbzA==";
 order_status :any="Nn9l9xhHYQsvNB503C4EAQ==";
 Encryptdata:any
 selectAdd(addressSelect:any){
  // selected=true
  console.log("addressSelect",addressSelect)
  this.encrypt.encryption(addressSelect).subscribe({next:(encryption_res:any)=>{
    if(encryption_res){

      console.log("encryption_res",encryption_res.data)
      this.delivery_address_id=encryption_res.data
      this.billing_address_id=encryption_res.data
      console.log("delivery_address_id",this.delivery_address_id)
      console.log("billing_address_id",this.billing_address_id)
      console.log("ckeckoutdata",this.body)
      // return this.Encyption_Data
    }
  },error:(encryption_error)=>{
    console.log("encryption_error",encryption_error)
  }})
  // this.delivery_address_id=this.encryption(addressSelect)
  console.log("billing_address_id",this.Encryptdata)
}

placeorder(){
this.cartservice.addToCart(this.body,this.delivery_address_id, this.billing_address_id, this.payment_status, this.order_status)
  .subscribe((response: any) => {
    // Handle the response here
    localStorage.setItem('orderid',response.data.id)
    this.toast.success("Order Placed Successfully")
    this.router.navigate(['/cart/checkout/success'])
    this.cart.items = [];
    localStorage.setItem('cartData', JSON.stringify(this.cart));
    console.log("cart",this.cart.items)
  }, (error: any) => {
    // Handle the error here
    this.toast.error("Order Not Placed")
  });


}
}

