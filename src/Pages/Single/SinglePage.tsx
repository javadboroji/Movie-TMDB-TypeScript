import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useMovieDetail, useMovieImages, useReviewsMovie } from '../../Hoock';

import { API_IMAGE } from '../../env';
import Comment from './Comment';
import CommentList from './CommentList';
import ImagesSlider from './ImagesSlider';
import { FaAudioDescription } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

type genres = {
  id: number,
  name: string
}




function SinglePage() {
  const { id }: any = useParams();

  const { data, isLoading } = useMovieDetail(id);
  const { data: reviwes } = useReviewsMovie(id);
  
  useEffect(() => {
   
    
  }, [id,reviwes])
  if (isLoading) {
    return <h1 className='text-white my-6 text-center'> Loading</h1>
  }
  return (
    <div className='container mx-auto'>
      <div className='mt-6'>
        <div className='relative w-full h-full image-single-banner-parent'>
          <img src={API_IMAGE + data?.poster_path} className=' image-single-banner' alt='poster' style={{ objectFit: 'contain' }} />
        </div>
        <h2 className='text-white text-2xl md:text-5xl text-center font-semibold py-3 '>{data?.title}</h2>

        <div className='flex flex-wrap flex-col mx-8 md:mx-0 md:flex-row md:items-center justify-between my-6'>
          <div className='flex items-center my-4 md:my-0'>
            <svg className="w-[16px] h-[16px] text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1.984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L2.506 1.139A1 1 0 0 0 1 1.984Z" />
            </svg>
            {data?.genres?.map((item: genres) => {
              return (
                <span key={item.id} className='text-green-500 mx-2'> {item.name}</span>
              )
            })}
          </div>
          <div className='flex items-center my-4 md:my-0'>
            <svg className="w-[16px] h-[16px] text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
            </svg>
            <span className='text-white mx-2'>{data?.popularity}</span>
          </div>

          <div className='flex items-center my-4 md:my-0'>
            <svg className="w-[16px] h-[16px] text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
            </svg>
            <span className='text-white mx-2'>{data?.release_date}</span>
          </div>
          <div className='flex items-center my-4 md:my-0'>
            <svg className="w-[16px] h-[16px] text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className='text-white mx-2'>{data?.runtime}</span>
          </div>
          <div className='flex items-center my-4 md:my-0'>
            <svg className="w-6 h-6 text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z" />
            </svg>
            <span className='text-white mx-2'>{data?.vote_average}</span>
          </div>
          <div className='flex items-center my-4 md:my-0'>
            <FaEarthAfrica  color='yellow' size={20}/>
              {data?.production_countries?.map((item: any, i: any) => {
                return (
                  <span key={i} className='text-white mx-2'>
                    

                    {item.name}
                  </span>
                )
              })}
          </div>
        </div>
        <div className='flex flex-col  mx-4 sm:mx-0  my-6'>
        <FaAudioDescription  color='yellow' size={24}/>

          <span className=' text-sm sm:text-lg text-white text-justify mx-2'>{data?.overview}</span>
        </div>
        <h1 className='text-yellow-600 text-left font-bold lg:text-6xl text-3xl px-4  py-8'> Reviews </h1>
        <div className='flex w-full'>
          {<CommentList reviwes={reviwes} />}
        </div>

              <ImagesSlider id={id}/>
        </div>
      </div>
  )
}

export default SinglePage