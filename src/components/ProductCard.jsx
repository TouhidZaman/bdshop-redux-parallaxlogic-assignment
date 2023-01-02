import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

import { addToCart, removeFromCart } from "features/cartSlice";

const ProductCard = ({ product, isInCart }) => {
  const dispatch = useDispatch();
  const { id, title, price, category, image, rating } = product;
  const navigate = useNavigate();

  return (
    <div className="shadow-lg rounded-3xl border relative p-4 flex flex-col">
      {isInCart && (
        <div className="flex justify-end">
          <div className="bg-indigo-500 text-white rounded-md px-2">
            {product.quantity}
          </div>
        </div>
      )}
      <div className="mb-4 flex justify-center">
        <img className="rounded-md h-24 w-24" src={image} alt={"imag"} />
      </div>
      <div className="mb-10">
        <h1 className="font-bold mb-1 text-blue-500">
          {title.length > 35 ? title.substring(0, 35) + "..." : title}
        </h1>
        <p>
          Category: <span className="text-indigo-500 ml-1">{`${category}`}</span>
        </p>
        <p>
          Rating:
          <Rating
            className="mx-1"
            initialRating={rating?.rate}
            emptySymbol={<FaStar className="text-gray-500" />}
            fullSymbol={<FaStar style={{ color: "goldenrod" }} />}
            fractions={2}
            readonly
          ></Rating>
          ({rating?.count})
        </p>
        <p className="font-semibold">Price: ${price}</p>
      </div>
      {isInCart ? (
        <div className="absolute bottom-3 left-0 w-full px-8 flex justify-between">
          <button
            className={`${
              product.quantity === 1 ? "bg-red-500" : "bg-indigo-500"
            } text-lg text-white rounded h-8 w-10`}
            onClick={() => dispatch(removeFromCart(product))}
          >
            -
          </button>
          <div className="border flex-1 flex justify-center items-center mx-2 h-8 w-10 rounded-md border-gray-300">
            <span className="text-lg">{product.quantity}</span>
          </div>
          <button
            className="bg-indigo-500 text-lg text-white rounded h-8 w-10"
            onClick={() => dispatch(addToCart(product))}
          >
            +
          </button>
        </div>
      ) : (
        <div className="absolute bottom-3 left-0 w-full px-8 flex justify-between">
          <button
            className="bg-blue-500 rounded-full py-1 px-2 flex-1 mr-1 text-white text-bold"
            onClick={() => navigate(`/product/${id}`)}
          >
            View Details
          </button>
          <button
            title="Add to wishlist"
            className="bg-blue-500 py-1 px-2 rounded-full"
            onClick={() => dispatch(addToCart(product))}
          >
            <BsFillCartFill className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
