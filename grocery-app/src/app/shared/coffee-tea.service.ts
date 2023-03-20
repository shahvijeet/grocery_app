import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postUser(data : any){
      return this.http.post<any>('http://localhost:3000/Coffee-tea', data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }
  getUser(){
      return this.http.get<any>('http://localhost:3000/Coffee-tea')
      .pipe(map((res:any)=>{
        return res;
      }))
  }
  updateUser(data :any,id: number){
      return this.http.put<any>('http://localhost:3000/Coffee-tea/'+id ,data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }
  deleteUser(id : number){
    return this.http.delete<any>('http://localhost:3000/Coffee-tea/'+id)
    .pipe(map((res:any)=>{
      return res;

    }))

}
  products(){
    return this.http.get<any>('http://localhost:3000/Coffee-tea');
  }

}
