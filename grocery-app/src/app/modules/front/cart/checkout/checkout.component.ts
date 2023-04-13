import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router, private address:AddressService , 
    private cartservice:CartService,private encrypt:EncryptionService) { 
    const totalData = localStorage.getItem('Total');
    if (totalData) {
      this.total = JSON.parse(totalData);
      console.log("Total bill",this.total);
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
placeorder(){

//     this.cartservice.addToCart().subscribe({
// })

}
}

