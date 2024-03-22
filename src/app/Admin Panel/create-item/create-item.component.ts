import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  price: FormControl = new FormControl('');
  image: FormControl = new FormControl('');

  constructor(
    private apiService : ServiceService,
    private router : Router
  ) {}

  addItem() {
    const data = new FormData();
    data.append('name', this.title.value);
    data.append('description', this.description.value);
    data.append('price', this.price.value);
    data.append('image', this.uploadedImage);

    this.apiService.addItem(data).subscribe((response) => {
      console.log('response', response);
      this.router.navigateByUrl('/admin/items');
    })
  }

  uploadedImage : any

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.uploadedImage = file;
    }
  }
}
