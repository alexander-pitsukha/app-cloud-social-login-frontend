import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../_services/category.service';
import {Category} from './category';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialog} from '../dialog/confirmation-dialog.component';

@Component({templateUrl: './list.component.html'})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  totalElements: number = 0;

  constructor(public categoryService: CategoryService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getCategories({page: '0', size: '5'});
  }

  private getCategories(request) {
    this.categoryService.getAll(request)
      .subscribe(data => {
          this.categories = data['content'];
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
    this.getCategories(request);
  }

  deleteCategory(id: number) {
    this.categoryService.delete(id)
      .subscribe(data => {
          this.categories = this.categories.filter(item => item.id !== id);
          console.log('Category deleted successfully!');
        }
        , error => {
          console.log(error.error.message);
        }
      );
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        message: 'Do you want to delete the category and the associated licenses?'
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteCategory(id);
      }
    });
  }
}
