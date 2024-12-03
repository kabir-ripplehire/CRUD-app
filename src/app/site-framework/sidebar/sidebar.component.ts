import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../products/products.service";
import {Category} from "../category";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  catagoryList: Category[];

  constructor(private productsService : ProductsService) { }

  ngOnInit() : void {
    this.productsService.getCategories().subscribe(data=>{
      this.catagoryList = data;
      console.log(this.catagoryList);
    })
  }

  protected readonly console = console;
}
