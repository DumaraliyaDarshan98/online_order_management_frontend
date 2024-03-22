import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  loginUser : any;

  constructor (private router: Router) {

  }

  ngOnInit(): void {
    if(localStorage.getItem('loginUser')) {
      this.loginUser = JSON.parse(localStorage.getItem('loginUser') || '');
    }
  }


  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/home');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
