import React from "react";

import ProductCard from "components/ProductCard";
import Loading from "components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { toggleSortBy } from "features/filterSlice";
import { useGetProductsQuery } from "features/apiSlice";

const Home = () => {
  const { keywords, sortBy } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery({ sortBy });
  let filteredProducts = [];
  let content = null;

  //Applying search filtering
  if (keywords) {
    let keywordsArray = keywords.split(" ");
    filteredProducts = products.filter((product) =>
      keywordsArray.some(
        (keyword) =>
          product.title?.toLowerCase().includes(keyword.toLowerCase()) ||
          product.category?.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  } else {
    filteredProducts = products;
  }

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <h1 className="text-center mt-10 text-2xl">{error} </h1>;
  } else if (!filteredProducts.length) {
    content = <h1 className="text-center mt-10 text-2xl">Oops no products found</h1>;
  } else {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-8 mx-auto my-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  const activeClass = "text-white  bg-blue-500 border-white";

  return (
    <div className="max-w-7xl gap-14 m-8 lg:mx-16">
      <div className="mb-10 flex flex-col lg:flex-row lg:justify-between">
        <h1 className="text-xl mb-4 lg:mb-0 lg:text-2xl text-blue-500 font-semibold">
          All Products
        </h1>
        <div className="flex lg:justify-end gap-2">
          <span className="px-2 md:px-3 py-1 md:py-2 md:font-semibold">
            Sort By:
          </span>
          <button
            className={`border px-2 md:px-3 py-1 md:py-2 rounded-full md:font-semibold ${
              sortBy === "asc" ? activeClass : ""
            }`}
            onClick={() => dispatch(toggleSortBy("asc"))}
          >
            Ascending
          </button>
          <button
            className={`border px-2 md:px-3 py-1 md:py-2 rounded-full md:font-semibold ${
              sortBy === "desc" ? activeClass : ""
            }`}
            onClick={() => dispatch(toggleSortBy("desc"))}
          >
            Descending
          </button>
        </div>
      </div>
      {content}
    </div>
  );
};

export default Home;
