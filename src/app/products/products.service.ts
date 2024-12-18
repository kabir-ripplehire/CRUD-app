  import { Injectable } from '@angular/core';
  import {HttpClient} from "@angular/common/http";
  import {Observable} from "rxjs";
  import {Product} from "./product";
  import {Category } from "../site-framework/category";

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsService {

    constructor(private httpClient: HttpClient) { }

    getAllProducts() : Observable<Product[]>{
      const productUrl = 'http://localhost:3000/products';
      return this.httpClient.get<Product[]>(productUrl); // will return an observable
    }

    createProduct(productBody) : Observable<Product>{
      const productUrl = 'http://localhost:3000/products';
      return this.httpClient.post<Product>(productUrl , productBody); // will return an observable
    }

    viewProduct(productId) : Observable<Product>{
      const productUrl = 'http://localhost:3000/products/'+productId;
      return this.httpClient.get<Product>(productUrl); // will return an observable
    }

    updateProduct(productId , productBody) : Observable<Product>{
      const productUrl = 'http://localhost:3000/products/'+productId;
      return this.httpClient.put<Product>(productUrl , productBody); // will return an observable
    }

    deleteProduct(productId) : Observable<Product>{
      const productUrl = 'http://localhost:3000/products/'+productId;
      return this.httpClient.delete<Product>(productUrl); // will return an observable
    }

    searchCategoryProducts(categoryId) : Observable<Product[]>{
      const productUrl = 'http://localhost:3000/products?categoryId='+categoryId;
      return this.httpClient.get<Product[]>(productUrl); // will return an observable
    }

    searchDateProducts(dateParam) : Observable<Product>{
      const productUrl = 'http://localhost:3000/products'+dateParam;
      return this.httpClient.get<Product>(productUrl); // will return an observable
    }

    getCategories() : Observable<Category[]>{
      const categoriesUrl = 'http://localhost:3000/categories';
      return this.httpClient.get<Category[]>(categoriesUrl);
    }
  }
