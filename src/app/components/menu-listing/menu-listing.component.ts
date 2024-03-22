import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-menu-listing',
  templateUrl: './menu-listing.component.html',
  styleUrls: ['./menu-listing.component.css']
})
export class MenuListingComponent implements OnInit {

  menuList: any[] = [];
  loginUser :any;

  constructor(
    private service: ServiceService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getMenuList();
    if(localStorage.getItem('loginUser')) {
      this.loginUser = JSON.parse(localStorage.getItem('loginUser') || '');
    }
  }

  getMenuList() {
    const payload = {
      page: 1,
      limit: 100
    }
    this.service.getMenuList(payload).subscribe((response) => {
      console.log('response', response)
      this.menuList = response?.data;
    });
  }

  orderItem(item: any) {
    const payload =
    {
      "user_id": this.loginUser?.id,
      "total_amount": item?.price,
      "status": 1,
      "items": [
        {
          "item_id": String(item?.id),
          "quantity": "1",
          "amount": String(item?.price)
        }
      ]
    }
    this.service.createOrder(payload).subscribe((response) => {
      if(response?.status) {
        this.router.navigateByUrl('/order');
      }
    })
    console.log('payload', payload)
  }


  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/home');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
