import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from '../common/app.constants';
import {UserService} from './user.service';
import {Order} from '../order/order';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  userId: number;

  constructor(private http: HttpClient, private userService: UserService) {
    this.userService.getCurrentUser().subscribe({
      next: (data) => {
        this.userId = data['id'];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getAll(request): Observable<any> {
    const params = request;
    return this.http.get(AppConstants.ORDER_SERVICE + 'orders', {params});
  }

  find(id: number): Observable<any> {
    return this.http.get<Order>(AppConstants.ORDER_SERVICE + 'orders/' + id);
  }

  createOrder(order): Observable<any> {
    return this.http.post(AppConstants.ORDER_SERVICE + 'orders', {
      customerName: order.name,
      email: order.email,
      phoneNumber: order.phone,
      amount: order.amount,
      userId: this.userId,
      productId: order.productId
    }, httpOptions);
  }

  updateOrder(order): Observable<any> {
    return this.http.put(AppConstants.ORDER_SERVICE + 'orders', {
      razorpayOrderId: order.razorpay_order_id,
      razorpayPaymentId: order.razorpay_payment_id,
      razorpaySignature: order.razorpay_signature
    }, httpOptions);
  }
}
