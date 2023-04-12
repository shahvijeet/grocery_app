import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
constructor(private router:Router) { }
ngOnInit(): void {
    window.scrollTo(0, 0);
}
logout() {
  localStorage.removeItem('adminRegisteredData');
  localStorage.removeItem('User_login_Token');
  this.router.navigate(['./home']);
}
}
