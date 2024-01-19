import React, { useState } from 'react'
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Input, Space } from 'antd';
import { AudioOutlined, CloseOutlined } from '@ant-design/icons';
import { useSearch } from '../../Hoock';
import Item from 'antd/es/list/Item';
import { API_IMAGE } from '../../env';
import { Spin } from 'antd';
import { CiStar } from "react-icons/ci";

type SearchDrawerProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function SearchDrawer({ open, setOpen }: SearchDrawerProps) {

    const [placement, setPlacement] = useState<DrawerProps['placement']>('top');
    const [searchInp, setSearchInpt] = useState<string>("")
    const onClose = () => {
        setOpen(false);
    };
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1677ff',
            }}
        />
    );
    const { Search } = Input;
    const { mutate, data, status } = useSearch()
    const onSearch = () => {
        console.log(searchInp);
        mutate(searchInp);

    }
    return (
        <>
            <Drawer
                title="Search Movie"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
                closeIcon={<CloseOutlined />}
                style={{
                    background: '#001529',
                    height: '100vh'
                }}
            >

                <div className='flex items-center w-full lg:w-1/2 mx-auto' >
                    <input
                        placeholder="input search text"
                        value={searchInp}
                        onChange={(e) => setSearchInpt(e.target.value)}
                        style={{
                            width: '90%',
                            margin: 'auto',
                            display: 'flex',
                            padding: '1rem'

                        }}
                        className="custom-search"

                    />
                    <button className='search-btn' onClick={onSearch}>
                        Search
                    </button>
                </div>
                <button onClick={onClose} style={{ position: 'absolute', top: '6%', right: '5%' }}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
                {data &&
                    data?.data?.results.map((item, i: any) => {
                        return (
                            <div className='flex justify-center  mx-auto w-full lg:w-1/2 my-6' key={i}>
                                <a href={`/single/${item.id}`} className='text-white w-full flex items-center lg:justify-between' >
                                    <div className='flex  flex-col lg:flex-row lg:items-center'>
                                        <img src={API_IMAGE + item.poster_path} alt='image' style={{ width: '8rem', height: '8rem', objectFit: "contain" }} />
                                        <span className='lg:text-xl font-medium ml-4'> {item.title}</span>
                                        <div className='flex items-center ml-4'>
                                            <CiStar color='yellow' size={24}/>

                                            <span className='text-white mx-2'>{item.vote_average}</span>
                                        </div>
                                    </div>

                                </a>
                            </div>

                        )
                    })
                }
                {
                    status === "pending" && <div className='flex justify-center my-6 '><Spin size="large" /></div>
                }
                {
                    status === "success" && data?.data?.results.length === 0 && <div className='flex justify-center my-6 '> <h1 className='text-white text-4xl'> Not Found</h1></div>
                }
            </Drawer>
        </>
    )
}

export default SearchDrawer