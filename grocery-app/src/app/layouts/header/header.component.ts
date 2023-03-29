import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
userdata:any;
  constructor(private router:Router) { 

     const data=localStorage.getItem('adminRegisteredData');
     if(data){
       this.userdata=JSON.parse(data);
     }
  }
  
  logout(){
    localStorage.removeItem('adminRegisteredData');
    this.router.navigate(['./home']);
  }

  }

