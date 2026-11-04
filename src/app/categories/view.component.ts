import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../_services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from './category';

@Component({templateUrl: './view.component.html'})
export class CategoryViewComponent implements OnInit {

  id: number;
  category: Category;

  constructor(
    public categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.categoryService.find(this.id).subscribe((data: Category) => {
      this.category = data;
    });
  }

}
