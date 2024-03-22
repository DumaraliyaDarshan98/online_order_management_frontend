import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(
    private apiService : ServiceService
  ) {}

  ngOnInit(): void {
    this.userList();
  }

  userList() {
    this.apiService.userList().subscribe((response) => {
      this.users = response?.data
    })
  }
}
