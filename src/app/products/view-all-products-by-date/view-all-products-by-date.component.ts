import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-all-products-by-date',
  templateUrl: './view-all-products-by-date.component.html',
  styleUrls: ['./view-all-products-by-date.component.scss']
})
export class ViewAllProductsByDateComponent implements OnInit {

  searchDate = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data=> {
      this.searchDate = data.date;
    })
  }

}
