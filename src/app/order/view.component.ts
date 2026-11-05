import {Component, OnInit} from '@angular/core';
import {OrderService} from '../_services/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from './order';

@Component({templateUrl: './view.component.html'})
export class OrderViewComponent implements OnInit {

  id: number;
  order: Order;

  constructor(
    public orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.orderService.find(this.id).subscribe((data: Order) => {
      this.order = data;
    });
  }

}
