import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../products.service";
import {Product} from "../product";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  productId = 0;
  productDetails: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
    });

    this.productService.viewProduct(this.productId).subscribe(productData => {
      this.productDetails = productData;
    })
  }

  updateProduct() {
    // @ts-ignore
    this.router.navigate([`/products/update-product/${this.productDetails.id}`]);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe(
      () => {
        console.log("Product deleted successfully");
        this.router.navigate(['/products']); // Navigate to another route after deletion
      },
      error => {
        console.error("Error deleting product:", error);
      }
    );
  }
}
