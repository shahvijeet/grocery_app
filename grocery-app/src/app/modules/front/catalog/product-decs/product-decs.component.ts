import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncryptionService } from 'src/app/service/encryption.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-decs',
  templateUrl: './product-decs.component.html',
  styleUrls: ['./product-decs.component.css']
})
export class ProductDecsComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,
    private productservice:ProductsService,private encrypt:EncryptionService) { }
    filteritem:any=[];

      getproduct(encryption:any){
        this.productservice.getproductbyid(encryption).subscribe({
          next:(res:any)=>{
            console.log("GETPRODUCTBYID",res);
            this.filteritem.push(res.data);
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
           this.getproduct(this.encryption_data.data)
        },error:(encryption_error)=>{
          console.log("encryption_error",encryption_error)
        }})
      }
    
      ngOnInit(): void {
        this.route.paramMap.subscribe((params:any)=>{
          console.log(params.get('id'));
          this.encryption(params.get('id'));
        })
    
      }
    
    

}

