import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UpdateprofileService } from 'src/app/service/updateprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  // user: any = {
  //   fullname: '',
  //   lastname:'',
  //   email: '',
  //   mobile: '',
  //   alternatePhone: '',
  //   alternateEmail: '',
  //   birthDate: ''
  // };
  // userdata:any;
  public updateProfile !: FormGroup;
  constructor(private http: HttpClient,
              private router:Router,
              private formBuilder : FormBuilder,
              private updateservice:UpdateprofileService,
              private toast:ToastrService){ }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.updateProfile = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      birthdate:['',Validators.required],
    })
    }

    update(){
      const data=this.updateProfile.getRawValue();
      const body={
        first_name:data.firstname,
        last_name:data.lastname,
        secondary_email:data.email,
        secondary_mobile_number:data.phone,
        password:data.password,
        date_of_birth:data.birthdate,
      }
      this.updateservice.updateprofile(body).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['front/user/profile']);
        // alert("Profile Updated Successfully");
        this.toast.success("Profile Updated Successfully");
      },
      (err) => {
        console.error(err);
        // alert("Something went wrong");
        this.toast.error("Something went wrong");
      }
    
      );
      this.updateProfile.reset();
      
    }

    logout() {
      localStorage.removeItem('adminRegisteredData');
      localStorage.removeItem('User_login_Token');
      this.router.navigate(['./home']);
    }
  }

    




