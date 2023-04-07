import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangepasswordService } from 'src/app/service/changepassword.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  public changePassword !: FormGroup;

  constructor(private formBuilder : FormBuilder,private http:HttpClient,private router:Router,private changepassword:ChangepasswordService){}
  ngOnInit(): void {
    this.changePassword = this.formBuilder.group({
      oldpass:['',Validators.required],
      newpass:['',Validators.required],
      confirmpass:['',Validators.required]

    })  
  }
  
  onchangepass(){
    const data=this.changePassword.getRawValue();
    const body={
      oldPassword:data.oldpass, 
      newPassword:data.newpass,
      
    }
     
 
     // check if the new password matches the confirmation password
     if (data.newpass !== data.confirmpass) {
       alert("New password and confirmation password do not match");
       return;
     }
    console.log(body);
    this.changepassword.changepassword(body).subscribe(
      (res) => {
        console.log(res);
        // this.router.navigate(['front/user/profile']);
        alert("Password Changed Successfully");
      },
      (err) => {
        console.error(err);
        alert("Current Password is incorrect.");
      }
    );
    this.changePassword.reset();
    
  }
  logout() {
    localStorage.removeItem('adminRegisteredData');
    localStorage.removeItem('User_login_Token');
    this.router.navigate(['./home']);
  }
}
