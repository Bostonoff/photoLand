import React from "react";
import CategoryNav from "../components/CategoryNav";
import MainSlider from "../components/MainSlider";
import PromoImg1 from "../img/promo_img1.png";
import PromoImg2 from "../img/promo_img2.png";

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]">
          <div>
            <CategoryNav />
          </div>
          <div className="w-full max-w-lg  lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            <div className="grad flex-1 h-[250px] rounded-[10px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save <span className="text-accent">35%</span> all{" "}
                  <span className="text-accent">dslr</span> cameras
                </div>
                <a href="#" className="uppercase text-accent/100">
                  Shop Now
                </a>
              </div>
              <img
                className="absolute z-20 -top-2 -right-4"
                src={PromoImg1}
                alt="img!"
              />
            </div>
            <div className="grad flex-1 h-[250px] rounded-[10px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save <span className="text-accent">25%</span> all{" "}
                  <span className="text-accent">mirrorless</span> cameras
                </div>
                <a href="#" className="uppercase text-accent/100">
                  Shop Now
                </a>
              </div>
              <img
                className="absolute z-20 top-4 -right-6"
                src={PromoImg2}
                alt="img!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
