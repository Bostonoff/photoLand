import React from "react";
import GifErrorPage from "./gif/404.gif";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="mb-16 pt-40 lg:pt-[30px] xl:pt-0">
        <div className="container m-auto">
          <div className="pb-2">
            <p className="text-2xl uppercase font-semibold text-accent text-center">
              Oops! Page Not Found
            </p>
            <p className="text-lg text-center">
              Sorry, but the page you are looking for is not found. Please, make
              sure you have typed the current URL
            </p>
          </div>
          <div className="flex justify-center">
            <img src={GifErrorPage} alt="Error GIF" />
          </div>
          <div className="flex justify-center pt-2">
            <Link to={"/"} className="btn btn-accent">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
