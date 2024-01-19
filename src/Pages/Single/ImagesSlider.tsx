import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import { useMovieImages } from '../../Hoock';
import { API_IMAGE } from '../../env';
function ImagesSlider({ id }: any) {
  const { data: images } = useMovieImages(id);
  useEffect(() => {

  }, [images ,id])
  
  return (
    <div>
      {images &&
        <>
          <h1 className='text-yellow-600 text-left font-bold lg:text-6xl text-3xl px-4  py-4'> Images </h1>
          <div className='flex'>
            <Swiper
              slidesPerView={1}
              breakpoints={{
       
                768: {
                  slidesPerView: 3,
                },
                998: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={20}
              freeMode={true}
              navigation={true}
              modules={[FreeMode, Navigation]}
              className=" swiper-nowPlay"
            >
              {images.backdrops?.map((item: any, i: any) => {
                console.log(item);
                if (i < 6) {

                  return (
                    <SwiperSlide key={i}>
                      <div className='now-paly-box relative overflow-hidden m-1' >
                        <img src={API_IMAGE + item.file_path} alt={item.name} />
                      </div>
                    </SwiperSlide>
                  )
                }
              })}

            </Swiper>
          </div>
        </>

      }

    </div>
  )

}

export default ImagesSlider