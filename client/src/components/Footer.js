import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInbox,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 uppercase mb-6 font-semibold">
            Subscribe to our News
          </h2>
          <p className="text-white/70">
            Be the first to get the latest news about trends,promotions and much
            more!
          </p>
        </div>
        <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14">
          <input
            type="text"
            placeholder="Your email address"
            className="input"
          />
          <button className="btn btn-accent min-w-[150px]">Join</button>
        </form>
        <div className="text-base text-white flex gap-x-6 capitalize mx-auto max-w-max mb-9">
          <a href="#" className="hover:text-accent transition-all">
            Returns Policy
          </a>
          <a href="#" className="hover:text-accent transition-all">
            Track Your Order
          </a>
          <a href="#" className="hover:text-accent transition-all">
            Shipping & Delivery
          </a>
        </div>
        <div className="flex gap-x-6  mx-auto max-w-max text-2xl mb-16">
          <a href="#" className="hover:text-red-600 transition-all">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-blue-500 transition-all">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-blue-400 transition-all">
            <FaInbox />
          </a>
          <a href="#" className="hover:text-pink-500 transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-500 transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-500 transition-all">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="py-10 border-t border-t-white/10">
        <div className="container mx-auto text-center">
          <div className="text-accent text-sm">
            Copyright &copy; Photoland 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
