import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  first_name: FormControl = new FormControl('');
  last_name: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  phone_no: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {

  }
  submit() {
    const payload = {
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      email : this.email.value,
      phone_no: this.phone_no.value,
      password : this.password.value
    }

    console.log('payload', payload);
    this.service.register(payload).subscribe((response) => {
      if (response?.status) {
        this.router.navigateByUrl('/home')
        localStorage.setItem('loginUser', JSON.stringify(response))
      }
      this.router.navigateByUrl('/home')
    }, (error) => {
      this.router.navigateByUrl('/home')
    })
  }
}
