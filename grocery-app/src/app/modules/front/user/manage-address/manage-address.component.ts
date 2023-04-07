import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/service/address.service';
import { EncryptionService } from 'src/app/service/encryption.service';


@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent implements OnInit {
  addresses: any[] = [];

  constructor(private router:Router, private address:AddressService , private encrypt:EncryptionService) { }

  ngOnInit() {

    this.address.manageaddress().subscribe({
      next:(res:any)=>{
        console.log(res); // log the entire response object
        this.addresses = res.data.addresses;
        console.log(this.addresses);
    },
    error:(err)=>{
      console.log(err);
    }
  })
  

  }
  encryption_data:any;
  delete_add(id:any){
    this.encryption(JSON.stringify(id))

  }

encryption(id:any){
  this.encrypt.encryption(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.encryption_data = res.data;
      console.log(this.encryption_data);
      this.deleteaddress(this.encryption_data);
    }
  })


}
deleteaddress(encryption:any){
  this.address.deleteaddress(encryption).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.addresses = res.data.addresses;
      console.log(this.addresses);
    }
  })
}

  logout() {
    localStorage.removeItem('adminRegisteredData');
    localStorage.removeItem('User_login_Token');
    this.router.navigate(['./home']);
  }
}
