export interface Product {
  id: number;
  productId : string;
  productName: string;
  categoryId : number;
  description : string;
  rating : number;
  price : number;
  productImg: string;
  isAvailable : boolean;
  color : string;
  reviews: number
}
