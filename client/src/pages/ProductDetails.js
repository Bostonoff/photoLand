import React, { useContext } from "react";
// useParams hook
import { useParams } from "react-router-dom";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import RelatedProducts from "../components/RelatedProducts";
// context
import { CartContext } from "../context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./LoadingPage/Loading";
const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  // get the product data base on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data) {
    return (
      <div className="flex justify-center p-2">
        <Loading />
      </div>
    );
  }
  // category title
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <>
      <div className="mb-16 pt-40 lg:pt-[30px] xl:pt-0">
        <div className="container mx-auto">
          {/* text */}
          <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
            <div className="flex-1 lg:max-w-[40%] lg:h-auto grad rounded-lg flex justify-center items-center">
              <img
                src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
                alt="img!"
                className="w-full max-w-[65%]"
              />
            </div>
            <div className="flex-1 bg-primary p-6 xl:p-12 rounded-lg flex flex-col justify-center">
              {/* category title */}
              <div className="uppercase text-accent text-lg font-medium mb-2">
                {data[0].attributes.categories.data[0].attributes.title} camers
              </div>
              {/* title */}
              <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
              {/* description */}
              <p className="mb-12">{data[0].attributes.description}</p>

              <div className="flex items-center justify-between gap-x-8 ">
                {/* price */}
                <div className="text-2xl">Price:</div>
                <div className="flex items-center gap-[10px] lg:gap-[20px] xl:gap-[30px]">
                  <div className="text-3xl text-accent">
                    ${data[0].attributes.price}
                  </div>
                  <button
                    onClick={() => addToCart(data, id)}
                    className="btn btn-accent">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* related products */}
          <RelatedProducts categoryTitle={categoryTitle} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductDetails;
