import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateprofileService } from 'src/app/service/updateprofile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userdata: any;
  
  constructor(private router: Router, private user: UpdateprofileService) { 
    
  }
  
  ngOnInit(): void {
    this.router.events.subscribe((res:any) => {
    if(res.url){
      this.user.getprofile().subscribe({
            next:(res) => {
          //console.log("123456",res);
          this.userdata = res;
          localStorage.setItem('customerId', JSON.stringify(this.userdata.data.id));
        },
        error:(err) => {  
          console.error(err);
          
        }
      });
    // const data = localStorage.getItem('adminRegisteredData');
    // if (data) {
    //     this.userdata = JSON.parse(data);}
     }
  })
  }
    
    // }

  logout() {
    localStorage.removeItem('adminRegisteredData');
    localStorage.removeItem('User_login_Token');
    this.router.navigate(['./home']);
  }
}
