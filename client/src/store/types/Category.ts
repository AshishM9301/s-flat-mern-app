export interface AddCategoryRequestBody {
  body: { name: string };
}

export interface AddCategoryResposneBody {
  success: boolean;
  data: Array<CategoryResposneBody>;
  message: string;
}

interface CategoryResposneBody {
  created_at: string;
  name: string;
  products: Array<T>;
  updated_at: string;
  _id: string;
}
