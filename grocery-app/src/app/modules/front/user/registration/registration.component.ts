import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FrontService } from 'src/app/service/front.service';
import { UserModel } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  public signupForm !: FormGroup;
  submitted =false;
  
  constructor(private front:FrontService, private formBuider : FormBuilder, 
    private http : HttpClient, private router:Router,private toast:ToastrService) { }
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.signupForm = this.formBuider.group({

      fullname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      lastname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
      // age:['',[Validators.required,Validators.max(100)]],
      username:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]]
    })
  }
  
   
  

  signUp(){
    let {
      fullname,
      lastname,
      email,
      username,
      password,
      mobile,
    } = this.signupForm.getRawValue();
    
    const data:UserModel={
      first_name:fullname,
      last_name: lastname,
      primary_email:email,  
      primary_mobile_number:mobile, 
      username:username,
      password:password,
    };

        // this.front.userlogin(data).subscribe(()=>{

        // });
        this.submitted = true
        if(this.signupForm.invalid){
              return
        }
        this.front.usersignup(data).subscribe(
          (res) => {
            // Handle successful response
            this.toast.success("Signup Successfull");
            this.signupForm.reset();
            this.router.navigate(['user/login']);
          },
          (error) => {
            // Handle error
            console.log(error);
            this.toast.error("Signup Failed");
          }

          );
        }
      }