import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id:any;
  index:any;
  name:any;
  isAddToCart:boolean=false;  
  userid:any;
  constructor(private product:ProductsService,
    private route: ActivatedRoute,
    private cartservice:CartService){
  
    // this.getData()
  }
  
  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      this.name = params.get('cat_name');
      //console.log(this.id)
    });
  }
  
    // getData(){
    //   this.product.getProduct().subscribe(res=>{
    //     this.index= res.filter(ele=>ele.cat_name === this.name)
    //     //console.log(this.index)
        
    //    })
    //   }

    //   addCart(){
    //      const data=localStorage.getItem('adminRegisteredData')
    //      if(data){
    //         const data1=JSON.parse(data)
    //         this.userid=data1.id
    //       }

    //     let body = {
    //       ...this.index[0],
    //       "user_id": this.userid
    //     };
    //   this.cartservice.addToCart(body).subscribe((response:any) => {
    //     console.log("response", response);
    //     console.log("id", this.id);
    //   })
    //   this.isAddToCart=true
    // }

}
