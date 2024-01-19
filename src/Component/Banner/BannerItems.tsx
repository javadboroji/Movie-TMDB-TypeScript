import React, { useState, useEffect } from 'react';
import type { Popular } from '../../types';
import { API_IMAGE } from '../../env';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

function BannerItems({ data }: any) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: String) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };


  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Autoplay]}
        className="mySwiper"
       autoplay={true}
       loop={true}
       breakpoints={{
       
        768: {
          slidesPerView: 2,
        },
        998: {
          slidesPerView: 3,
        },
      }}
      >
        {
          data && data.map((slide: any) => {
            return (

             
                <SwiperSlide key={slide.id} >
                  <img src={API_IMAGE + slide.poster_path

                  } alt={slide.name} className='banner-img' />
                </SwiperSlide>
           
            )
          })
        }

      </Swiper>
    </>
  )
}

export default BannerItems