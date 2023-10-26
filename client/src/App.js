import React, { useEffect, useState } from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/ErrorPage/Error";
import LoadingMain from "./pages/LoadingPage/LoadingMain";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/search", element: <Search /> },

      { path: "*", element: <Error /> },
    ],
  },

]);
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <LoadingMain />
        </div>
      ) : (
        <div>
          <RouterProvider router={router} />
        </div>
      )}
    </div>
  );
};

export default App;
