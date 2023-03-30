import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FrontService } from 'src/app/service/front.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder,private http : HttpClient,private router:Router,private front:FrontService) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  Userlogin(){
    const data=this.loginForm.getRawValue();
    const body={
      username:data.username, 
      password:data.password

    }
    console.log(body);
    
    this.front.userlogin(body).subscribe((res)=>{
    // this.http.get<any>("http://localhost:3000/usersignup").subscribe(res=>{
      console.log(res);
      this.router.navigate(['front/user/profile']);
        localStorage.setItem("adminRegisteredData",JSON.stringify(res)) ;
        
        // localStorage.setItem("adminRegisteredData",JSON.stringify(user)) ;
        // localStorage.setItem("adminRegisteredData",JSON.stringify(user)) ;
}
    )
  }
}
