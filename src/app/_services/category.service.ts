import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {AppConstants} from '../common/app.constants';
import {Category} from '../categories/category';

@Injectable({providedIn: 'root'})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(request): Observable<any> {
    const params = request;
    return this.httpClient.get(AppConstants.CATEGORY_SERVICE + 'categories', {params});
  }

  getWithProducts(id: number): Observable<any> {
    return this.httpClient.get(AppConstants.CATEGORY_SERVICE + 'categories/' + id + '/with-products');
  }

  getWithProductsAndOrders(id: number): Observable<any> {
    return this.httpClient.get(AppConstants.CATEGORY_SERVICE + 'categories/' + id + '/with-products-and-orders');
  }

  create(category: any): Observable<any> {
    return this.httpClient.post(AppConstants.CATEGORY_SERVICE + 'categories', JSON.stringify(category), AppConstants.httpOptions);
  }

  find(id: number): Observable<any> {
    return this.httpClient.get<Category>(AppConstants.CATEGORY_SERVICE + 'categories/' + id);
  }

  update(id: number, category: Category): Observable<any> {
    return this.httpClient.put(AppConstants.CATEGORY_SERVICE + 'categories/' + id, JSON.stringify(category), AppConstants.httpOptions);
  }

  delete(id: number) {
    return this.httpClient.delete(AppConstants.CATEGORY_SERVICE + 'categories/' + id);
  }
}
