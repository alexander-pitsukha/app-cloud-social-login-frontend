import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../_services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './add-edit.component.html'
})
export class CategoryAddEditComponent implements OnInit {

  id: any;
  form: FormGroup;
  errorMessage;

  constructor(public categoryService: CategoryService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
      this.categoryService.find(this.id).subscribe(x => this.form.patchValue(x));
    }
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]]
    });
  }

  onSubmit() {
    var response = this.id ? this.categoryService.update(this.id, this.form.value) : this.categoryService.create(this.form.value);

    response.subscribe(
      data => {
        console.log('Category created / updated successfully!');
        this.router.navigateByUrl('categories/list');
      }
      ,
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
