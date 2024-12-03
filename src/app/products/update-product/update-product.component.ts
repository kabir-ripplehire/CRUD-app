import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from "../products.service";
import { Product } from "../product";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  ratings = [1, 2, 3, 4, 5];
  reviews = [0, 5, 10, 15, 20];
  availabilityOptions = ['Yes', 'No'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      productId: [''],
      productName: ['', [Validators.required, Validators.minLength(3)]],
      categoryId: [null, Validators.required],
      color: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      rating: [null, Validators.required],
      isAvailable: ['Yes', Validators.required],
      reviews: [0, Validators.required],
      description: ['', Validators.maxLength(300)],
      productImg: ['']
    });

    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      this.productService.viewProduct(this.productId).subscribe(productData => {
        this.productForm.patchValue(productData);
        this.productForm.get('isAvailable').setValue(productData.isAvailable ? 'Yes' : 'No');
      });
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const updatedProduct = {
        ...this.productForm.value,
        isAvailable: this.productForm.get('isAvailable').value === 'Yes'
      };

      this.productService.updateProduct(this.productId, updatedProduct).subscribe(
        data => {
          console.log('Product updated successfully:', data);
          this.router.navigate(['/products']);
        },
        error => {
          console.error('Error updating product:', error);
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
