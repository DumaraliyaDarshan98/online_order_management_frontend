import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(
    private service : ServiceService,
    private router : Router
  ) {}

  ngOnInit() {

  }

  submit() {
    const payload = {
      phone_no : String(this.userName.value),
      password : this.password.value
    }
    console.log('payload', payload);
    this.service.login(payload).subscribe((response) => {
      if(response?.status) {
        localStorage.setItem('loginUser', JSON.stringify(response?.data))
        this.router.navigateByUrl('/home')
      }
      this.router.navigateByUrl('/home')
    }, (error) => {
      this.router.navigateByUrl('/home')
    })
  }
}
