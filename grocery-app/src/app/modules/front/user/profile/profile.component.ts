import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
              private updateservice:UpdateprofileService){ }

  ngOnInit(): void {
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
        alert("Profile Updated Successfully");
      },
      (err) => {
        console.error(err);
        alert("Something went wrong");
      }
    
      );
      this.updateProfile.reset();
      
    }
  }

    
  //   const data=localStorage.getItem("adminRegisteredData");
  //   if(data!=null){
  //   this.userdata=JSON.parse(data);
  //   console.log(this.userdata);
  //   }
  //   this.http.get<any>(`http://localhost:3000/usersignup/${this.userdata.id}`).subscribe(data => {
  //     this.user = {
  //       fullname: data.fullname,
  //       lastname:data.lastname,
  //       email: data.email,
  //       mobile: data.mobile,
  //       age:data.age,
  //       password:data.password,
  //       alternatePhone: data.alternatePhone || '',
  //       alternateEmail: data.alternateEmail || '',
  //       birthDate:data.birthDate || ''
  //     };
  //   });
  // }

  // updateProfile() {
  //   if (!this.user.alternatePhone || !this.user.alternateEmail || !this.user.birthDate) {
  //     alert('Please fill in missing fields.');
  //     return;
  //   }

  //   this.http.put(`http://localhost:3000/usersignup/${this.userdata.id}`, this.user).subscribe(data => {
  //     alert('Profile updated successfully.');
  //   });

  // }



