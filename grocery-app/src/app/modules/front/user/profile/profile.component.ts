import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user: any = {
    fullname: '',
    lastname:'',
    email: '',
    mobile: '',
    alternatePhone: '',
    alternateEmail: '',
    birthDate: ''
  };
  userdata:any;
  constructor(private http: HttpClient){ }

  ngOnInit(): void {

    
    const data=localStorage.getItem("adminRegisteredData");
    if(data!=null){
    this.userdata=JSON.parse(data);
    console.log(this.userdata);
    }
    this.http.get<any>(`http://localhost:3000/usersignup/${this.userdata.id}`).subscribe(data => {
      this.user = {
        fullname: data.fullname,
        lastname:data.lastname,
        email: data.email,
        mobile: data.mobile,
        age:data.age,
        password:data.password,
        alternatePhone: data.alternatePhone || '',
        alternateEmail: data.alternateEmail || '',
        birthDate:data.birthDate || ''
      };
    });
  }

  updateProfile() {
    if (!this.user.alternatePhone || !this.user.alternateEmail || !this.user.birthDate) {
      alert('Please fill in missing fields.');
      return;
    }

    this.http.put(`http://localhost:3000/usersignup/${this.userdata.id}`, this.user).subscribe(data => {
      alert('Profile updated successfully.');
    });

  }



}
