import React, { useEffect } from 'react'
import { useReviewsMovie } from '../../Hoock';
import { API_IMAGE } from '../../env';
import Comment from './Comment';


function CommentList({ reviwes }: any) {


  return (
    <ul className='w-full'>
      {reviwes?.results?.map((review: any) => {
        return (
          <li key={review.id} className='flex flex-col border-b-2 my-2'>
            <div className='flex px-4 flex-col sm:flex-row flex-col sm:flex-row'>
              <div className='flex my-2 sm:my-0 items-center'>
                {review.author_details.avatar_path ? <img src={API_IMAGE + review.author_details.avatar_path} className='avatar-image' alt='avatar' /> :
                  <svg className="w-6 h-6 text-yellow-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                }

                <span className='text-white mx-4'>{review.author}</span>
              </div>
              <div className='flex  my-2 sm:my-0 items-center'>
                <svg className="w-4 h-4 text-yellow-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z" />
                </svg>
                <span className='text-white  mx-2'>{review.created_at}</span>
              </div>


            </div>
            <span className='text-white text-sm my-8 px-4 text-left '>{review.content}</span>
          </li>
        )
      })}
      <li>
        <Comment />
      </li>
    </ul>
  )
}

export default CommentList