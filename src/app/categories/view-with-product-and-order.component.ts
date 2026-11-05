import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../_services/category.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from './category';

@Component({templateUrl: './view-with-product-and-order.component.html'})
export class CategoryWithProductAndOrderViewComponent implements OnInit {

  id: number;
  category: Category;

  constructor(
    public categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.categoryService.getWithProductsAndOrders(this.id).subscribe((data: Category) => {
      this.category = data;
    });
  }

}
