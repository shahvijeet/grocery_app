import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  array:any=[
    {catagory:'vagetables',cat_name:'redish',quantity:500,price:2,img:"strawberry.png"},
    {catagory:'vagetables',cat_name:'potato',quantity:500,price:2,img:'orange.png'},
    {catagory:'Fruits',cat_name:'redish',quantity:500,price:2,img:'banana.png'},
    {catagory:'vagetables',cat_name:'potato',quantity:500,price:2,img:'potato.png'},
    {catagory:'Fruits',cat_name:'redish',quantity:500,price:2,img:'apple.png'},
    ]
    filteredPeople = this.array;

    filterPeopleByAge(category: string) {
      this.filteredPeople = this.array.filter((array: { category: string; }) => array.category >= category);
    }
}

