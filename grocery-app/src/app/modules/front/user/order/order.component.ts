import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
constructor(private router:Router,private cartservice:CartService) { }
PastOrderArr: any[] = [];
PastOrder: any[] = [];
  encryption_order_id: any;
  username: any;
ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cartservice.Get_Customer_All_Orders().subscribe({
      next: (User_all_Order_res: any) => {
        if (User_all_Order_res) {
          if (User_all_Order_res.data) {
            console.log('User_all_Order_res', User_all_Order_res.data.orders);
            User_all_Order_res.data.orders;
            this.username = User_all_Order_res.data.username;
            User_all_Order_res.data.orders.sort((a:any, b:any) => {
              if (a.createdAt < b.createdAt) {
                return 1;
              }
              if (a.createdAt > b.createdAt) {
                return -1;
              }
              return 0;
            });
            this.PastOrderArr=User_all_Order_res.data.orders
            this.PastOrder=User_all_Order_res.data.orders.order_items
            console.log("PastOrderArr====>",this.PastOrderArr)
                       }
        }
      },
      error: (User_all_Order_error) => {
        console.log('User_all_Order_error', User_all_Order_error);
      },
    });
    // JSON.stringify(this.Add_Order_Response_Data)
  }
  logout() {
    localStorage.removeItem('adminRegisteredData');
    localStorage.removeItem('User_login_Token');
    this.router.navigate(['./home']);
  }
}

