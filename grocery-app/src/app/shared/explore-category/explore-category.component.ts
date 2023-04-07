import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-explore-category',
  templateUrl: './explore-category.component.html',
  styleUrls: ['./explore-category.component.css']
})
export class ExploreCategoryComponent implements OnInit {
  grocery_items: any = [];
  Items:any= [];

  constructor(private router: Router, private category: CategoryService) {}

  ngOnInit(): void {
    this.category.getcategory().subscribe({
      next:(res) => {
        // console.log(res);
        // store data from res in grocery_items array
        this.grocery_items = res;
        // console.log(this.grocery_items.data);
        this.Items=this.grocery_items.data;
        console.log("items",this.Items);
      },
      error:(err) => {
        console.error(err);
      }
    });
  }
} 

  


