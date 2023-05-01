import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  product_items: any = [];
  Items:any= [];
  images=[
    {img:'/assets/banana.png'},
    {img:'/assets/brocoli.png'},
    {img:'/assets/bcarrot.png'},
    {img:'/assets/apple.png'}
  ]

constructor(private product:ProductsService){

  this.getData()
}
ngOnInit(){}

getData(){
  this.product.getproduct().subscribe({
    next:(res)=>{
    this.product_items=res
    this.Items=this.product_items.data
    console.log("items",this.Items);
    },
    error:(err)=>{
      console.error(err);
    }
    })
  }
  Add_cart(id:any){}
}
  // addToCart(id:any){
  //   const body= this.product_items.filter((ele: { id: any; })=>ele.id === id)

  //       this.cartservice.addToCart(body[0]).subscribe((prod:any) => {
          
  //       })
  // }
