import {Component, OnInit} from '@angular/core';
import {OrderService} from '../_services/order.service';
import {Order} from './order';
import {PageEvent} from '@angular/material/paginator';

@Component({templateUrl: './list.component.html'})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];
  totalElements = 0;

  constructor(public orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getOrders({page: '0', size: '5'});
  }

  private getOrders(request) {
    this.orderService.getAll(request)
      .subscribe(data => {
          this.orders = data['content'];
          this.totalElements = data['totalElements'];
        }
        , error => {
          console.log(error.error.message);
        }
      );
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getOrders(request);
  }
}
