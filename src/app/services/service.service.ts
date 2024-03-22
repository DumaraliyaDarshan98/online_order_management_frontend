import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  login(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/darshan/order-managment/users/login', payload);
  }

  adminLogin(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/darshan/order-managment/admin/login', payload);
  }

  register(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/darshan/order-managment/users/register', payload);
  }

  userList(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:80/darshan/order-managment/users/list');
  }

  itemList(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:80/darshan/order-managment/items/list');
  }

  deleteItem(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/darshan/order-managment/items/delete', payload);
  }

  addItem(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/darshan/order-managment/items/create', payload);
  }

  updateItem(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/darshan/order-managment/items/update', payload);
  }

  getItem(id: any): Observable<any> {
    return this.httpClient.get<any>('http://localhost:80/darshan/order-managment/items/detail?id=' + id);
  }

  getMenuList(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/darshan/order-managment/items/list', payload);
  }

  createOrder(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/darshan/order-managment/orders/create', payload);
  }

  orderList(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/darshan/order-managment/orders/list', payload);
  }

  updateOrder(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/darshan/order-managment/orders/update', payload);
  }
}
