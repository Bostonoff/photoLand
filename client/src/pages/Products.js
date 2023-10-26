import React, { useState, useEffect } from "react";
//useParams hook
import { useParams } from "react-router-dom";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
const Products = () => {
  const { id } = useParams();
  // get data from category id based on id  useParams
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  const [title, setTitle] = useState(null);
  // set the title ehrn the dta is fetched
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  });

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[20px] justify-center">
          <CategoryNav />
          <main>
            {/* title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              <span className="text-accent">{title}</span> cameras
            </div>
            {/* product grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-[15px] md:gap-[20px]">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
