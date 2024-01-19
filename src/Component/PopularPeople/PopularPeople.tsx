import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { usePeople } from '../../Hoock'
import Item from 'antd/es/list/Item';
import { people } from '../../types';
import { API_IMAGE } from '../../env';
import { Pagination } from 'antd';
function PopularPeople() {
    const { data } = usePeople();
    const pageSize = 8; // Adjust the number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    const startItem = (currentPage - 1) * pageSize;
    const endItem = currentPage * pageSize;
    const displayedData = data?.slice(startItem, endItem);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <div className='container mx-auto'>
            <h1 className='text-yellow-600 font-bold lg:text-6xl text-3xl px-4 text-left  py-8'> Popular People  </h1>
            <Row>
                {data && displayedData.map((people: people, i: number) => {
                    return (
                        <Col xs={24} md={12} lg={6} style={{ padding: '0 1rem' }} key={i} >
                            <div>
                                <a href='#'>
                                    <img src={API_IMAGE + people.profile_path} alt={people.name} />
                                </a>

                            </div>
                            <span className='text-white text-lg'>{people.name}</span>
                        </Col>
                    )
                })}
                <Pagination current={currentPage}
                    pageSize={pageSize}
                    total={data?.length}
                    onChange={handlePageChange} style={{ background: '#fff', width: '100%', padding: '1rem', borderRadius: '8px' }} />
            </Row>
        </div> 
    )
}    

export default PopularPeople