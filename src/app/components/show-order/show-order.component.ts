import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  menuList: any[] = [];
  loginUser: any;

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('loginUser')) {
      this.loginUser = JSON.parse(localStorage.getItem('loginUser') || '');
      this.getOrder();
    }
  }

  getOrder() {
    const payload = {
      user_id: this.loginUser.id,
    }

    this.service.orderList(payload).subscribe((response) => {
      console.log('response', response)
      this.menuList = response?.data;
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/home');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  deleteOrder(id: any) {
    const payload = {
      "id": id,
      "status": 4
    }
    this.service.updateOrder(payload).subscribe((reponse) => {
      if (reponse?.status) {
        this.getOrder();
      }
    })
  }
}
