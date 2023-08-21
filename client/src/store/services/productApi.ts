// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config";
import type { AddCategoryRequestBody, AddCategoryResposneBody } from "../types";
import { RootState } from "../store";
import { ProductsResponseBody } from "../types/Product";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    categories: builder.mutation<ProductsResponseBody, {}>({
      query: () => ({
        url: "/category/all",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    deleteCategories: builder.mutation<
      ProductsResponseBody,
      { params: string }
    >({
      query: (req) => ({
        url: `/category/${req.params}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCategoriesMutation, useDeleteCategoriesMutation } =
  productApi;
