import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseurl = environment.URL;
  categoryurl = environment.category;

  constructor(private http : HttpClient) { }

  getcategory(){
    return this.http.get(this.baseurl+this.categoryurl,
      {headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 
      'Access-Control-Allow-Origin': '*'})});
  }

  GetImages_Category(){
    let imageArray = [
      {
        title:"Breakfast",
         image: "/assets/Category/breakfast.jpg"
      },
      {
        title:"Dairy",
         image: "/assets/Category/dairy.jpg"
      },
      {
        title:"FoodGrains",
         image: "/assets/Category/foodgrains.jpg"
      },
      {
        title:"Fruits",
         image: "/assets/Category/fruits.jpg"
      },
      {
        title:"Meat",
         image: "/assets/Category/meat.jpg"
      },
      {
        title:"Vegetables",
         image: "/assets/Category/vegetables.jpg"
      },
  
 
   ];
   
   return imageArray
  }
}
