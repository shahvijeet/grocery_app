import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  array:any=[
    {catagory:'vagetables',cat_name:'potato',quantity:500,price:2,img:"strawberry.png"},
    {catagory:'vagetables',cat_name:'tomato',quantity:500,price:2,img:'orange.png'},
    {catagory:'fruits',cat_name:'orange',quantity:500,price:2,img:'banana.png'},
    {catagory:'vagetables',cat_name:'chilly',quantity:500,price:2,img:'potato.png'},
    {catagory:'fruits',cat_name:'apple',quantity:500,price:2,img:'apple.png'},
    ]
    filteredcatagory = this.array;

    filtercatagorybyitem(catagory: string) {
      this.filteredcatagory = this.array.filter((array: { catagory: string; }) => array.catagory == catagory);
    }
}

