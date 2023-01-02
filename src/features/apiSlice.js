import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/"
    }),
    tagTypes: ["products", "product"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (config) => {
                if(config?.sortBy === "desc") {
                    return "products?sort=desc"
                } 
                return "products"
            },
            providesTags: ["products"]
        }),
        getProduct: builder.query({
            query: (productId) =>  `products/${productId}`,
            providesTags: ["product"]
        }),
    }),
})

export const {useGetProductsQuery, useGetProductQuery} = productsApi