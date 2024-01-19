import React from 'react'
import { useNowPlay } from '../../Hoock'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode,Navigation } from 'swiper/modules';
import { API_IMAGE } from '../../env';

function NowPlay() {
    const { data, error, isLoading } = useNowPlay();
    console.log(data);
    if (isLoading) {
        return <h1> Loading........</h1>
    } else if (error) {
        return <h1> Error</h1>
    } else {
        return (
            <div className='container mx-auto'>
                <h1 className='text-yellow-600 font-bold lg:text-6xl text-3xl px-4 text-left  py-8'> Now Play </h1>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                          slidesPerView: 1,
                        },
                        998: {
                          slidesPerView: 3,
                        },
                      }}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true}
                    modules={[FreeMode,Navigation]}
                    className=" swiper-nowPlay"
                >
                    {data && data.map((item: any) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div className='now-paly-box relative overflow-hidden m-1'>
                                  <img src={API_IMAGE + item.backdrop_path} alt={item.name} />
                                    <div className='description h-40'>
                                        <p className='text-yellow-400 text-xl text-left ps-2 py-2 text-over-hidden-1'>{item.original_title}</p>
                                        <span className='text-white text-sm text-justify text-over-hidden px-2 '>{item.overview}</span>
                                        <div><a href='#' className='text-blue-600 p-4 flex hover:text-yellow-400'> More</a></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        )
    }
}

export default NowPlay