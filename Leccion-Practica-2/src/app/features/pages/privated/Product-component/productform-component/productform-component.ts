import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ProductService } from '../../../../services/product.service';
import { IProduct, IProductResponse } from '../../../../interfaces/public/Product';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateLocaleAndSetLanguage } from 'typescript';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-productform-component',
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,],
  templateUrl: './productform-component.html',
  styleUrl: './productform-component.scss',
})
export class ProductformComponent {

    dialogRef = inject(MatDialogRef<ProductformComponent>);
    data: IProduct = inject(MAT_DIALOG_DATA);

    isEdit = false;

  form = new FormGroup({
    title: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s.,:'"()-]+$/)
      ]
    }),

    price: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(1),
        Validators.pattern('^[0-9]*$')
      ]
    }),

    category:new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(300),
        Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s.,:'"()-]+$/)
      ]
    }),

    stock: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]
    }),

    description: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(300),
        Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s.,:'"()-]+$/)
      ]
    })
  });

  ngOnInit() {
    if (this.data) {
      this.isEdit = true;
      this.form.patchValue({
        ...this.data,
        price: this.data.price?.toString() ?? '',
        stock: this.data.stock?.toString() ?? ''
      });
    }
  }

    onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.dialogRef.close(this.form.value);
    }

    onCancel() {
        this.dialogRef.close();
    }
}
