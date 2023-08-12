// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config";
import type { AddCategoryRequestBody, AddCategoryResposneBody } from "../types";
import { RootState } from "../store";
import { ProductsResponseBody } from "../types/Product";

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: "categoryApi",
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
    addCategory: builder.mutation<
      AddCategoryResposneBody,
      AddCategoryRequestBody
    >({
      query: (req) => ({
        url: "/category/add",
        method: "POST",
        body: req.body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    allCategory: builder.mutation<AddCategoryResposneBody, {}>({
      query: (req) => ({
        url: "/category",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    addSeries: builder.mutation<
      AddCategoryResposneBody,
      AddCategoryRequestBody
    >({
      query: (req) => ({
        url: "/series/add",
        method: "POST",
        body: req.body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    allSeries: builder.mutation<AddCategoryResposneBody, {}>({
      query: (req) => ({
        url: "/series",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    addProduct: builder.mutation<AddCategoryResposneBody, { body: any }>({
      query: (req) => ({
        url: "/product/add",
        method: "POST",
        body: req.body,
        headers: {
          "Content-Type": "multipart/form-data; boundary=something",
        },
      }),
    }),
    sellerProduct: builder.mutation<ProductsResponseBody, {}>({
      query: () => ({
        url: "/product/my-products",
        method: "GET",
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
  useAddCategoryMutation,
  useAddSeriesMutation,
  useAllCategoryMutation,
  useAllSeriesMutation,
  useAddProductMutation,
  useSellerProductMutation,
} = categoryApi;
