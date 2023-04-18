import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import hero from "../../../assets/svg/hero.svg";

export default function Hero() {
  return (
    <>
      <Swiper
        className="mb-28"
        // install Swiper modules
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          // disableOnInteraction: false,
        }}
        // loop={true}
        speed={500}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      >
        <SwiperSlide className="w-screen container mt-10">
          <div className="hero min-h-screen bg-base-200 rounded-3xl">
            <div className="flex justify-between items-center flex-col lg:flex-row-reverse xl:p-20">
              <img src={hero} className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pt-16" />
              <div className="px-7 my-14">
                <h1 className="text-3xl sm:text-3xl xl:text-5xl xl:pr-32 font-bold">Book is a window to the world</h1>
                <p className="py-6 ">wake up your dream by reading a book every day.</p>
                <button className="btn btn-secondary">Read now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="w-screen container mt-10">
          <div className="hero min-h-screen bg-red-400 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">
                  Books is <br />
                  window to the world!
                </h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-screen container mt-10">
          <div className="hero min-h-screen bg-base-200 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    //     <div>
    //       <h1 className="text-5xl font-bold">Box Office News!</h1>
    //       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>
  );
}
