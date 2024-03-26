import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  items: any[] = [];

  constructor(
    private apiService: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itemList();
  }

  itemList() {
    this.apiService.itemList().subscribe((response) => {
      this.items = response?.data
    })
  }

  deleteItem(id: any) {
    this.apiService.deleteItem({ id: id }).subscribe((response) => {
      this.itemList()
    })
  }
}
