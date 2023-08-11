// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config";
import type {
  LoginRequestBody,
  LoginResponseData,
  SignUpRequestBody,
} from "../types";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL + "/auth" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseData, LoginRequestBody>({
      query: (req) => ({
        url: "/login",
        method: "POST",
        body: req.body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    signup: builder.mutation<LoginResponseData, SignUpRequestBody>({
      query: (req) => ({
        url: "/register",
        method: "POST",
        body: req.body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    me: builder.mutation<LoginResponseData, { token: string }>({
      query: (req) => ({
        url: "/me",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${JSON.parse(req.token)}`,
        },
      }),
    }),
    verify: builder.mutation<LoginResponseData, { token: string }>({
      query: (req) => ({
        url: `/verify/${req.token}`,
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
  useLoginMutation,
  useSignupMutation,
  useMeMutation,
  useVerifyMutation,
} = authApi;
