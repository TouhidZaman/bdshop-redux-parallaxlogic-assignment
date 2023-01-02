import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

import axiosInstance from "utils/axios.config";
import Loading from "components/Loading";
import { addToCart } from "features/cartSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get(`products/${productId}`)
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Oops, something went wrong");
      });
  }, [productId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1 className="text-center">{error}</h1>;
  }

  return (
    <div className="grid grid-cols-1 max-w-7xl gap-8 m-8 lg:mx-16">
      <h1 className="text-xl lg:text-2xl text-blue-500 font-semibold">
        Product Details View Page
      </h1>
      <div className="shadow-lg rounded-3xl border relative  p-3 flex flex-col lg:flex-row">
        <div className="mr-4 w-52">
          <img
            className="rounded-md h-36 w-36 mb-2"
            src={product.image}
            alt={"product-imag"}
          />
          <div className="flex w-48">
            <Link
              to={"/"}
              className="bg-blue-500 rounded-full py-1 mr-1 px-2 flex-1 text-white text-bold text-center"
            >
              Back to products
            </Link>
            <button
              title="Add to wishlist"
              className="bg-blue-500  py-1 px-2 rounded-full"
              onClick={() => dispatch(addToCart(product))}
            >
              <BsFillCartFill className="text-white" />
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-2 text-blue-500">{product.title}</h1>
          <p className="font-semibold">{`Category: ${product.category}`}</p>
          <p className="font-semibold">{`Description: ${product.description}`}</p>
          <p>
            Rating:
            <Rating
              className="mx-1"
              initialRating={product?.rating?.rate}
              emptySymbol={<FaStar className="text-gray-500" />}
              fullSymbol={<FaStar style={{ color: "goldenrod" }} />}
              fractions={2}
              readonly
            ></Rating>
            ({product?.rating?.count})
          </p>
          <p className="font-semibold">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
