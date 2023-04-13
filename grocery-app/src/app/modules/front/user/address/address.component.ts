import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/service/address.service';
import { EncryptionService } from 'src/app/service/encryption.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  public User_Address_Add !:FormGroup;
  addresses: any[] = [];
  address_id:any;
  Address_btn:any="ADD Address";
  User_address_data:any;
  constructor(private router:Router ,
              private route:ActivatedRoute, 
              private http:HttpClient,
              private formBuilder : FormBuilder,
              private address:AddressService,
              private encrypt:EncryptionService,
              private toast:ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.paramMap.subscribe((params:any)=>{
      this.address_id = params.get('id');
      if(this.address_id){
        this.address.manageaddress().subscribe({
          next:(res:any)=>{
            console.log(res); 
            // log the entire response object
            this.User_address_data = res.data.addresses;
            console.log(this.User_address_data);
            this.User_address_data=this.User_address_data.filter((item:any)=>item.id==this.address_id)
            console.log(this.User_address_data);
            this.User_Address_Add.patchValue({"address_line_1": this.User_address_data[0].address_line_1,
          "address_line_2": this.User_address_data[0].address_line_2,
          "area": this.User_address_data[0].area,
          "country": this.User_address_data[0].country,
          "state": this.User_address_data[0].state,
          "city": this.User_address_data[0].city,
          "postal_code": this.User_address_data[0].postal_code,
          "landmark": this.User_address_data[0].landmark,
          "tag": this.User_address_data[0].tag});
          this.toast.success("Address Updated Successfully")
          },
          error:(err:any)=>{
            console.log(err);
            this.toast.error("Something went wrong")
          }
        })
        this.Address_btn="EDIT Address"
      }
    })

    this.User_Address_Add = this.formBuilder.group({
             
              address_line_1:new FormControl ("",[
                Validators.required
              ]),
              address_line_2:new FormControl ("",[
                Validators.required
              ]),
              area:new FormControl ("",[
                Validators.required
              ]),
              city:new FormControl ("",[
                Validators.required
              ]),
              state:new FormControl ("",[
                Validators.required
              ]),
              country:new FormControl ("",[
                Validators.required
              ]),
              postal_code:new FormControl ("",[
                Validators.required,
                Validators.maxLength(6),
                Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')
              ]),
              landmark:new FormControl ("",[
                Validators.required
              ]),
              tag:new FormControl ("",[
                Validators.required
              ]),
              
            })
          }
          encryption_data:string = ""; 
          
          editaddress(encryption_data: any) {
            this.address.editaddress(this.User_Address_Add.value, encryption_data).subscribe({
              next: (res: any) => {
                console.log(res);
                this.addresses = res.data.addresses;
                this.Address_btn = "ADD Address"
                this.router.navigate(["/front/user/manageaddress"])
                console.log(this.addresses);
              }
            })
          }



          add_address() {
            if (this.Address_btn == "ADD Address") {
              if (this.User_Address_Add.valid) {
                this.address.addaddress(this.User_Address_Add.value).subscribe((data: any) => {
                  console.log(data);
                  // alert("Address Added Successfully");
                  this.toast.success("Address Added Successfully");
                  this.User_Address_Add.reset();
                  this.router.navigate(['/front/user/manageaddress']);
                },
                (err) => {
                  console.log(err);
                  // alert("something went wrong");
                  this.toast.error("something went wrong");
                });
              }
            } else {
              this.encrypt.encryption(this.address_id).subscribe({
                next:(res:any)=>{
                  console.log(res);
                  this.encryption_data = res.data;
                  console.log(this.encryption_data);
                  this.editaddress(this.encryption_data);
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
