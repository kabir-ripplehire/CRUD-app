import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";
import { Product } from "../product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.scss']
})
export class ViewAllProductsComponent implements OnInit {
  productList: Product[];
  selectedProduct: Product | null = null; // Hold the selected product for the modal

  constructor(private productService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.productList = data;
    });
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  // Returns an array for empty stars if needed for consistent star count
  getEmptyStars(rating: number): number[] {
    const totalStars = 5;
    return Array(totalStars - Math.floor(rating)).fill(0);
  }

  openProductModal(product: Product) {
    this.selectedProduct = product; // Set the selected product for the modal
  }

  updateProduct(product: Product) {
    console.log("Updating product:", product.id);
    this.router.navigate([`/products/update-product/${product.id}`]);
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        console.log("Product deleted successfully");
        // this.productList = this.productList.filter(p => p.id !== productId);
      },
      error => {
        console.error("Error deleting product:", error);
      }
    );
  }
}
