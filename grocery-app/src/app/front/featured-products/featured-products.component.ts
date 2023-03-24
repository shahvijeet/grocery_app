import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  products:any;
  cartservice: any;
  

constructor(private product:ProductsService){

  this.getData()
}
ngOnInit(){}

getData(){
  this.product.getProduct().subscribe(res=>{
    this.products=res
   })
  }
  addToCart(id:any){
    const body= this.products.filter((ele: { id: any; })=>ele.id === id)

        this.cartservice.addToCart(body[0]).subscribe((prod:any) => {
          
        })
  }
}
