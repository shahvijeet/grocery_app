import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { EncryptionService } from 'src/app/service/encryption.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent  implements OnInit {
  orderid:any;
  description:any;
  constructor(private encrypt:EncryptionService,private cartservice:CartService) { 
    const cartData = localStorage.getItem('orderid');
    if (cartData) {
      this.orderid = JSON.parse(cartData);
      console.log("order",this.orderid);
    }
  }
  ngOnInit() {
    this.encryption(this.orderid);
    window.scrollTo(0, 0);
      }
  encryption_data:any;

  getoderdata(id:any){
    this.cartservice.getToCart(id).subscribe({
      next:(res:any)=>{
        if(res)
        {
          this.description=res.data
          console.log("147852369",this.description);
        }
      }
    })
  }
  
  
  encryption(id:any){

        this.encrypt.encryption(id.toString()).subscribe({
          next:(res:any)=>{
            this.encryption_data=res.data;
            console.log("123456ygfdsertyhjnb",this.encryption_data);
            
            this.getoderdata(this.encryption_data);
          }
        })




  }
}


