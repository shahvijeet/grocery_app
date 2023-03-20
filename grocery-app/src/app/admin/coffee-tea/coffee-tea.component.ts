import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { coffeeModel } from './coffee-tea.model';
import { ApiService } from 'src/app/shared/coffee-tea.service'; 
@Component({
  selector: 'app-coffee-tea',
  templateUrl: './coffee-tea.component.html',
  styleUrls: ['./coffee-tea.component.css']
})
export class CoffeeTeaComponent implements OnInit{
    public formValue !: FormGroup;
    userModelObj : coffeeModel = new coffeeModel();
    userData !: any;
    showAdd !: boolean;
    showUpdate !: boolean;
    submitted =false;
  constructor(private formbuilder: FormBuilder,private coffee : ApiService) { }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name :['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      category:['',[Validators.required]],
      price:['',[Validators.required]],
      Offer_Price:['',[Validators.required]],
      Image:['',[Validators.required]], 
      company:['',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]],
     }) 
     this.getUserDetails();
  
  }
  sign(){
    this.submitted = true
    if(this.formValue.invalid){
          return
    }
  }
  
  clickAddUser(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postUserDetails(){
    this.userModelObj.name = this.formValue.value.name;
    this.userModelObj.category = this.formValue.value.category;
    this.userModelObj.price = this.formValue.value.price;
    this.userModelObj.Offer_Price = this.formValue.value.Offer_Price;
    this.userModelObj.Image = this.formValue.value.Image;
    this.userModelObj.company = this.formValue.value.company;
    
  
    this.coffee.postUser(this.userModelObj).subscribe(res=>{
      alert('User Added Successfully')
      let ref = document.getElementById('cancel')
      ref ?.click();
      this.formValue.reset();
      this.getUserDetails();
    },err=>{
      alert('Something Went Wrong');
    })
  }
  getUserDetails(){
      this.coffee.getUser().subscribe(res=>{
        this.userData = res;
      })
  }
  deletUserDetails(row : any){
    this.coffee.deleteUser(row.id).subscribe(res=>{
      alert("User Deleted");
      this.getUserDetails();
      console.log("jhfbdsvb",row.id)
    })
  }
  editUserDetails(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.userModelObj.id = row.id;
      this.formValue.controls['name'].setValue(row.name);
      this.formValue.controls['category'].setValue(row.category);
      this.formValue.controls['price'].setValue(row.price);
      this.formValue.controls['Offer_Price'].setValue(row.Offer_Price);
      this.formValue.controls['Image'].setValue(row.Image);
      this.formValue.controls['company'].setValue(row.company);
      
  }
  updateUserDetails(){
    this.userModelObj.name = this.formValue.value.name;
    this.userModelObj.category = this.formValue.value.category;
    this.userModelObj.price = this.formValue.value.price;
    this.userModelObj.Offer_Price = this.formValue.value.Offer_Price;
    this.userModelObj.Image = this.formValue.value.Image;
    this.userModelObj.company = this.formValue.value.company;
    
  
    this.coffee.updateUser(this.userModelObj,this.userModelObj.id)
    .subscribe(res=>{
      console.log(res);
      alert("Update Successfully");
      let ref = document.getElementById('cancel')
      ref ?.click();
      this.formValue.reset();
      this.getUserDetails();
    })
  }
  
}
