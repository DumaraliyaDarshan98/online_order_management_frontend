import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  itemId: any;
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  price: FormControl = new FormControl('');
  image: FormControl = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private generalService: ServiceService,
    private router : Router
  ) {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id'])
      this.itemId = params['id']//log the value of id
    });
  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    this.generalService.getItem(this.itemId).subscribe((response) => {
      console.log('response', response?.data)
      this.title.setValue(response?.data?.name);
      this.description.setValue(response?.data?.description);
      this.price.setValue(response?.data?.price);
    });
  }

  uploadedImage: any

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.uploadedImage = file;
    }
  }

  editItem() {
    const data = new FormData();
    data.append('id', this.itemId)
    data.append('name', this.title.value);
    data.append('description', this.description.value);
    data.append('price', this.price.value);
    data.append('image', this.uploadedImage);

    this.generalService.updateItem(data).subscribe((response) => {
      console.log('response', response);
      this.router.navigateByUrl('/admin/items');
    })
  }
}
