import React from 'react'
import { useTopRate } from '../../Hoock'
import { LikeTwoTone, CalendarTwoTone, HeartTwoTone } from '@ant-design/icons';
import { API_IMAGE } from '../../env'; 
function TopRate() {
    const { data, error, isLoading } = useTopRate();
    if (isLoading) {
        return <h1> Loading........</h1>
    } else if (error) {
        return <h1> Error</h1>
    } else {
        return (
            <div id='topRate' className='container mx-auto '>
                <h1 className='text-yellow-600 font-bold lg:text-6xl text-3xl px-4  text-left py-8'> Top Rate</h1>
                <div className=' flex flex-wrap'>
                    {data && data.map((item: any) => {
                        return (
                            <div key={item.id} className='w-full my-2 md:w-1/3 lg:w-1/4 '>
                                <div className='top-rate-box relative overflow-hidden m-1'>
                                    <a href={`/single/${item.id}`}>
                                        <img src={API_IMAGE + item.backdrop_path} alt={item.name} />

                                        <div className='overly'>
                                            <span className='text-yellow-400 font-medium text-sm py-4'>{item.title}</span>
                                            <div className='flex items-center mx-2'>
                                                <LikeTwoTone twoToneColor="#fff" />
                                                <span className='text-yellow-400  mx-2 py-2'>{item.vote_count}</span>
                                            </div>
                                            <div className='flex items-center mx-2'>
                                                <CalendarTwoTone twoToneColor="#fff" />
                                                <span className='text-yellow-400  mx-2 py-2'>{item.release_date}</span>
                                            </div>
                                            <div className='flex items-center mx-2'>
                                                <HeartTwoTone twoToneColor="#fff" />
                                                <span className='text-yellow-400  mx-2 py-2'>{item.vote_average}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TopRate