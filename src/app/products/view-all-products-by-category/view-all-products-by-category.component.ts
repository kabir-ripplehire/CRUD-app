import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../products.service";
import { Product } from "../product";
import { Category } from "../../site-framework/category";

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.scss']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  searchCategory: Category;
  productList: Product[];  // Correct type as an array of Product

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.searchCategory = data.id;

      this.productsService.searchCategoryProducts(this.searchCategory).subscribe((categoryData: Product[]) => {
        this.productList = categoryData;  // Assign the array response to productList
      });
    });
  }
}
