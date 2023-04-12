import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncryptionService } from 'src/app/service/encryption.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  constructor(private router:Router,private route:ActivatedRoute,private productservice:ProductsService,
    private encrypt:EncryptionService) { }

filteritem:any=[];


  getproductlist(encryption:any){
    this.productservice.getproductbycategory(encryption).subscribe({
      next:(res:any)=>{
        console.log("GETPRODUCTLIST",res);
        this.filteritem=res.data;
              },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }


  encryption_data:any;
  
  encryption(id:any){
    // console.log("encryption_data");
    this.encrypt.encryption(id).subscribe({next:(encryption_res)=>{
      console.log("encryption_res",encryption_res)
      this.encryption_data=encryption_res 
       console.log("encryption_data",this.encryption_data.data)
       this.getproductlist(this.encryption_data.data)
    },error:(encryption_error)=>{
      console.log("encryption_error",encryption_error)
    }})
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe((params:any)=>{
      console.log(params.get('id'));
      this.encryption(params.get('id'));
    })

  }

}


