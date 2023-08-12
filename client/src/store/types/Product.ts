export interface AddProduct {
  success: boolean;
}

export interface ProductsResponseBody {
  success: boolean;
  message: string;
  data: Array<T>;
}
