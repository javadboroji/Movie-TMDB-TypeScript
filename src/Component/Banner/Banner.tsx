import React from 'react'
import { useGetPopular } from '../../Hoock';
import type {PopularData} from '../../types'
import BannerItems from './BannerItems';

function Banner() {
    const {data, error, isLoading } =useGetPopular();
   console.log(data);
   
    
   if(isLoading){
    return <h1> Loading........</h1>
   } else if(error){
    return <h1> Error</h1>
   }else{

       return (
           <div className=' flex w-full px-4 '>
               <BannerItems data={data} />
           </div>
       )
   }
}

export default Banner