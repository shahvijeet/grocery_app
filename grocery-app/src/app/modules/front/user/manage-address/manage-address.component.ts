import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/service/address.service';
import { EncryptionService } from 'src/app/service/encryption.service';


@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent implements OnInit {
  addresses: any[] = [];

  constructor(private router:Router, private address:AddressService , 
    private encrypt:EncryptionService,private toast:ToastrService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
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
deleteaddress(encryption: any) {
  const confirmed = confirm("Are you sure you want to delete this address?");

  if (confirmed) {
    this.address.deleteaddress(encryption).subscribe({
      next: (res: any) => {
        console.log(res);
        const deletedAddress = this.addresses.find(address => address.encryption === encryption);
        const deletedAddressIndex = this.addresses.indexOf(deletedAddress);
        this.addresses.splice(deletedAddressIndex, 1);
        this.toast.success("Address Deleted Successfully");
      }
    });
  }
}
  logout() {
    localStorage.removeItem('adminRegisteredData');
    localStorage.removeItem('User_login_Token');
    this.router.navigate(['./home']);
  }
}
