import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { addToSearchKeywords } from "features/filterSlice";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(addToSearchKeywords(search));
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const handleEnterKeyDown = (key) => {
    if (key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="h-14 bg-blue-500 w-full mx-auto px-2 md:px-16">
      <ul className="h-full  mx-auto flex justify-between items-center gap-2 lg:gap-3 font-semibold text-white">
        <h1 className="text-xl">
          <Link to={"/"}>BDShop</Link>
        </h1>
        <li className="flex bg-white mx-auto h-9 w-full max-w-lg  rounded-full pr-3">
          <input
            className="h-9 rounded-full w-[90%] lg:w-full text-sm border-0 pl-4 focus:ring-0 outline-none text-black"
            type="text"
            value={search}
            name="search"
            placeholder="Type product or category name here to search"
            onKeyDown={(e) => handleEnterKeyDown(e.key)}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => handleSearch()}>
            <BiSearchAlt className="text-blue-500" />
          </button>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link to="/cart">
          <li title="cart" className="bg-blue-400 p-2 rounded-full relative">
            <BsFillCartFill className="text-white " />
            <span className="absolute -top-2 -left-2 bg-orange-100 rounded-full p-2 py-0 text-blue-500">
              {cart.length}
            </span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
