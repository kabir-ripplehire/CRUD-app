import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  protected productId: any;

  constructor(private activatedRoute: ActivatedRoute,
              private ProductService: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;

      this.ProductService.deleteProduct(this.productId).subscribe(deleteData => {
        console.log("deleted successfully");
      })
    })
  }

}
