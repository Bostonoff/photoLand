import React from "react";
// use location hooks
import { useLocation } from "react-router-dom";
//useFetch hook
import useFetch from "../hooks/useFetch";
// components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");

  // get products based on search terms
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );

  return (
    <div className="mb-[30px] pt-40 lg:pt-4 xl:pt-0 ">
      <div className="container mx-auto">
        <div className="flex gap-x-[20px] justify-center">
          <div>
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {data?.length > 0 ? (
                <>
                  {data.length} result for{" "}
                  <span className="text-accent">{searchTerm}</span>
                </>
              ) : (
                <>
                  <span className="text-white">
                    no results found for{" "}
                    <span className="text-accent">{searchTerm}</span>
                  </span>
                </>
              )}
            </div>
            {/* product grid */}
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[15px] md:gap-[30px]">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
