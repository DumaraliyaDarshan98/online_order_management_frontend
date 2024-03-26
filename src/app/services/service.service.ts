import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  login(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/online_order_management_backend/users/login', payload);
  }

  adminLogin(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/online_order_management_backend/admin/login', payload);
  }

  register(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/online_order_management_backend/users/register', payload);
  }

  userList(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:80/online_order_management_backend/users/list');
  }

  itemList(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:80/online_order_management_backend/items/list');
  }

  deleteItem(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/online_order_management_backend/items/delete', payload);
  }

  addItem(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/online_order_management_backend/items/create', payload);
  }

  updateItem(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/online_order_management_backend/items/update', payload);
  }

  getItem(id: any): Observable<any> {
    return this.httpClient.get<any>('http://localhost:80/online_order_management_backend/items/detail?id=' + id);
  }

  getMenuList(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/online_order_management_backend/items/list', payload);
  }

  createOrder(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/online_order_management_backend/orders/create', payload);
  }

  orderList(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/online_order_management_backend/orders/list', payload);
  }

  updateOrder(payload: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:80/online_order_management_backend/orders/update', payload);
  }
}
