import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: any[] = [];

  constructor(
    private apiService : ServiceService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.itemList();
  }

  itemList() {
    this.apiService.itemList().subscribe((response) => {
      this.items = response?.data
    })
  }

  deleteItem(id:any) {
    this.apiService.deleteItem({ id :id }).subscribe((response) => {
      this.itemList()
    })
  }

  editItem(id: any) {
    this.router.navigateByUrl('/admin/edit-item/' + id);
  }
}
