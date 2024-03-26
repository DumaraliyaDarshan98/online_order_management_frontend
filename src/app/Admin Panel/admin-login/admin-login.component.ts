import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {


  email: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  submit() {
    const payload = {
      email: this.email.value,
      password: this.password.value
    }
    this.service.adminLogin(payload).subscribe((response) => {
      if (response?.status) {
        this.router.navigateByUrl('/admin/dashboard')
        localStorage.setItem('loginUser', JSON.stringify(response?.data))
      } else {
        this.router.navigateByUrl('/home')
      }
    }, (error) => {
      this.router.navigateByUrl('/home')
    })
  }
}


