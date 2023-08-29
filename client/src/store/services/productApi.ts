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
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = String(JSON.parse(localStorage.getItem("token")));

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
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
    addToFavouriteCategory: builder.mutation<
      ProductsResponseBody,
      { params: string }
    >({
      query: (req) => ({
        url: `/category/favourite/add/${req.params}`,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    removeToFavouriteCategory: builder.mutation<
      ProductsResponseBody,
      { params: string }
    >({
      query: (req) => ({
        url: `/category/favourite/remove/${req.params}`,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCategoriesMutation,
  useDeleteCategoriesMutation,
  useAddToFavouriteCategoryMutation,
  useRemoveToFavouriteCategoryMutation,
} = productApi;
