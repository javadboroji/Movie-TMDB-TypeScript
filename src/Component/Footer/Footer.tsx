import { Button } from 'antd'
import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdOutlineMovie } from "react-icons/md";

function Footer() {
    const items = [
        'Thousands of movies', 'Thousands of animations and cartoons for children', '24-hour support to guide you'
    ]
    return (
        <div style={{ background: '#001529' }}>
            <div className='container mx-auto py-6 ' >
                <h1 className='text-3xl lg:text-6xl text-center font-bold text-white'> Movie</h1>
                <ul className='lg:flex mx-auto justify-center my-4'>
                    {items && items.map((item, i) => (
                        <li key={i} className='flex items-center text-sm py-2 lgtext-xl text-slate-200 lg:mx-4'> <TiTick color='green' /> {item}</li>
                    ))}

                </ul>

                <button className='lg:p-6 p-3 text-white my-8 text-base lg:text-2xl bg-green-600 mx-auto rounded-lg flex items-center'> <MdOutlineMovie style={{margin:'0 1rem'}} />   Buy a subscription</button>
            </div>
        </div>

    )
}

export default Footer