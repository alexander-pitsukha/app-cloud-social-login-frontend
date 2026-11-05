import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {AppConstants} from '../common/app.constants';
import {Product} from '../products/product';

@Injectable({providedIn: 'root'})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(request): Observable<any> {
    const params = request;
    return this.httpClient.get(AppConstants.PRODUCT_SERVICE + 'products', {params});
  }

  getWithOrders(id: number): Observable<any> {
    return this.httpClient.get(AppConstants.PRODUCT_SERVICE + 'products/' + id + '/with-orders');
  }

  create(product: any): Observable<any> {
    return this.httpClient.post(AppConstants.PRODUCT_SERVICE + 'products', JSON.stringify(product), AppConstants.httpOptions);
  }

  find(id: number): Observable<any> {
    return this.httpClient.get<Product>(AppConstants.PRODUCT_SERVICE + 'products/' + id);
  }

  update(id: number, product: Product): Observable<any> {
    return this.httpClient.put(AppConstants.PRODUCT_SERVICE + 'products/' + id, JSON.stringify(product), AppConstants.httpOptions);
  }

  delete(id: number) {
    return this.httpClient.delete(AppConstants.PRODUCT_SERVICE + 'products/' + id);
  }
}
