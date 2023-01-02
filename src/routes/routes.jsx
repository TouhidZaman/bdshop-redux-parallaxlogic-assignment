import { createBrowserRouter } from "react-router-dom";

import Layout from "layout/Layout";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ProductDetails from "pages/ProductDetails";
import Cart from "pages/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
