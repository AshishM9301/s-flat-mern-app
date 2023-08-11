export interface AddCategoryRequestBody {
  body: { name: string };
}

export interface AddCategoryResposneBody {
  success: boolean;
  message: string;
}
