import React from 'react'
import { useUncominMovie } from '../../Hoock'
import { Popular, PopularData } from '../../types';
import { API_IMAGE } from '../../env';
import { Col, Row } from 'antd';
import { FaHeart } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

function UnComing() {
    const { data, isLoading, error } = useUncominMovie();

    console.log(data);

    return (
        <div className='container mx-auto'>
            <h1 className='text-yellow-600 font-bold lg:text-6xl text-3xl px-4  py-8 text-left'> Uncomin </h1>
            <Row>
                {data && data.map((movie: Popular ,i:number) => {
                    if(i<=5){
                        return (
    
                            <Col lg={12} xs={24}  key={movie.id} style={{padding:'8px'}}>
                                <div className='uncoming-box flex flex-col lg:flex-row' >
                                    <div className='uncomin-img  w-full lg:w-1/2'>
                                        <img src={API_IMAGE + movie.backdrop_path} alt={movie.name} />
                                    </div>
                                    <div className='uncoming-detail flex flex-col justify-between'>
                                        <span className='text-white text-lg font-semibold pl-8'> {movie.title}</span>
                                        <span className='text-white text-sm font-semibold pl-8 flex items-center my-2'> <FaHeart color='red' style={{margin:'0 6px 0 0 '}}/> {movie.popularity} </span>
                                        <span className='text-white text-sm font-semibold pl-8 flex items-center my-1'> <FaEarthAfrica  color='yellow' style={{margin:'0 6px 0 0 '}}/> {movie.original_language} </span>    
                                        <span className='text-white text-sm font-semibold pl-8 flex items-center my-2'> <MdOutlineDateRange  color='yellow' style={{margin:'0 6px 0 0 '}}/> {movie.release_date} </span>    
            
                                    </div>
                                </div>
                            </Col>
    
                        )

                    }
                })}
            </Row>
        </div>
    )
}

export default UnComing