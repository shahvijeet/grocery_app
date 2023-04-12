import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { EncryptionService } from 'src/app/service/encryption.service';
import { ProductsService } from 'src/app/service/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-decs',
  templateUrl: './product-decs.component.html',
  styleUrls: ['./product-decs.component.css']
})
export class ProductDecsComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,
    private productservice:ProductsService,private encrypt:EncryptionService,
    private cartservice:CartService,private toastr:ToastrService) { }
    filteritem:any=[];
    isaddToCart:boolean=false;


    addToCart(product: any) {
      const quantityInput = document.getElementById('quantity') as HTMLInputElement;
      const quantity = parseInt(quantityInput.value);
      this.toastr.success('Product added to cart successfully');
      if (quantity >= 1) {
        // Perform action to add product to cart
        console.log(`Added ${quantity} ${product.title}(s) to cart!`);
        let customerId = localStorage.getItem('customerId');
    if (!customerId) {
      customerId = Math.random().toString(36).substring(2);
      localStorage.setItem('customerId', customerId);
    }
    // Get cart data from local storage or create a new cart
    let cartData = localStorage.getItem('cartData');
    let cart;
    if (cartData) {
      cart = JSON.parse(cartData);
    } else {
      cart = {customerId: customerId, items: []};
    }
    
     // Check if the product already exists in the cart
     const existingItem = cart.items.find((item: { product: { id: any; }; }) => item.product.id === product.id);
     if (existingItem) {
       // Increment the quantity of the existing item
       alert(`${product.title} is already in your cart.`);
      //  existingItem.quantity += quantity;
    } 
    else {
      // Add new item to cart
      const item = {product: product, quantity: quantity};
      cart.items.push(item);
    }   
    this.isaddToCart=true;
    // Save updated cart data to local storage
    localStorage.setItem('cartData', JSON.stringify(cart));

      } 
      else {
        // Display error message or prevent button action
      alert('Please enter a quantity of at least 1.');
      }
    }

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
        window.scrollTo(0, 0);
        this.route.paramMap.subscribe((params:any)=>{
          console.log(params.get('id'));
          this.encryption(params.get('id'));
        })
    
      }
    
    

}

