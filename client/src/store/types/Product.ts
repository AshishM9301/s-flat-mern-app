export interface AddProduct {
  success: boolean;
}

export interface CategoryProductsResponseBody {
  success: boolean;
  message: string;
  data: Array<T>;
}

export interface DeleteCategoryResponseBody {
  success: boolean;
  message: string;
}

export interface AddToFavouriteCategoryResponseBody {
  success: boolean;
  message: string;
}
