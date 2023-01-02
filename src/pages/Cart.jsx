import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataProviderContext } from "context/DataProviderContext";
import ProductCard from "components/ProductCard";

const Cart = () => {
  const { cart, setCart } = useContext(DataProviderContext);
  return (
    <div className="max-w-7xl gap-14 m-8 lg:mx-16">
      <div className="mb-10 flex flex-col lg:flex-row lg:justify-between">
        <h1 className="text-xl mb-4 lg:mb-0 lg:text-2xl text-blue-500 font-semibold">
          Cart Items
        </h1>
        <div className="">
          <button
            className={`border px-2 md:px-3 py-1 md:font-semibold text-blue-500`}
            onClick={() => setCart([])}
          >
            Clear Cart
          </button>
        </div>
      </div>
      {cart.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-8 mx-auto my-10">
          {cart.map((product) => (
            <ProductCard key={product.id} product={product} isInCart />
          ))}
        </div>
      ) : (
        <div className="text-center pt-16">
          <h1 className="text-2xl">Oops your cart is empty</h1>
          <p className="text-blue-500 cursor-pointer mt-2">
            <Link to={"/"}>Lets add some items</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
