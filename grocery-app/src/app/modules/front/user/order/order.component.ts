import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
constructor(private router:Router) { }

logout() {
  localStorage.removeItem('adminRegisteredData');
  localStorage.removeItem('User_login_Token');
  this.router.navigate(['./home']);
}
}
