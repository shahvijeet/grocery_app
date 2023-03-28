import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder,private http : HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  Userlogin(){

    this.http.get<any>("http://localhost:3000/usersignup").subscribe(res=>{
      const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });console.log(user)
      if(user){
        alert('login success !!');
        this.loginForm.reset();

        localStorage.setItem("adminRegisteredData",JSON.stringify(user)) ;
        // localStorage.setItem("adminRegisteredData",JSON.stringify(user)) ;
        this.router.navigate(['front/user/profile']);
}
    })
  }
}
