import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ICart } from '../../../../interfaces/privated/cart';

@Component({
  selector: 'app-cart-form-component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './cart-form-component.html',
  styleUrls: ['./cart-form-component.scss'],
})
export class CartFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<CartFormComponent>);
  data: ICart | null = inject(MAT_DIALOG_DATA);

  isEdit = false;

  form = this.fb.group({
    products: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
      Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s.,:'"()-]+$/),
    ]],
    totalProducts: [0, [Validators.required, Validators.min(1), Validators.max(9999999999)]],
    totalQuantity: [0, [Validators.required, Validators.min(10), Validators.max(9999999999)]],
    discountedTotal: [0, [Validators.required, Validators.min(0), Validators.max(9999999999)]],
    total: [0, [Validators.required, Validators.min(0), Validators.max(9999999999)]],
  });

  ngOnInit() {
    if (this.data) {
      this.isEdit = true;
      this.form.patchValue({
        products: this.data.products.map((product) => product.title).join(', '),
        totalProducts: this.data.totalProducts,
        totalQuantity: this.data.totalQuantity,
        discountedTotal: this.data.discountedTotal,
        total: this.data.total,
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
