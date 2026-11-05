import {Component, OnInit} from '@angular/core';
import {ProductService} from '../_services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from './product';

@Component({templateUrl: './view-with-order.component.html'})
export class ProductWithOrderViewComponent implements OnInit {

  id: number;
  product: Product;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productService.getWithOrders(this.id).subscribe((data: Product) => {
      this.product = data;
    });
  }

}
