import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  menuList: any[] = [];

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.getMenuList();
  }

  getMenuList() {
    const payload = {
      page : 1,
      limit : 9
    }

    this.service.getMenuList(payload).subscribe((response) => {
      console.log('response',  response)
      this.menuList = response?.data;
    });

  }
}
