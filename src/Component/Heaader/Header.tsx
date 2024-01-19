import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import logoImage from '../../asset/images/film-strip_8820376.png';
import SearchDrawer from './SearchDrawer';
import Genres from '../Genres/Genres';
import { IoSearch } from "react-icons/io5";

const { Header } = Layout;
const items = [{ key: 'TopMovie', label: 'TopMovie' }, { key: 'NewMovie', label: 'NewMovie' }, { key: 'Best Of 2023', label: 'Best Of 2023' }]
function HeaderAnt() {
    const [open, setOpen] = useState<boolean>(false);

    const searchHandler = () => {
        setOpen(true)
    }
    return (
        <>
            <Layout >
                <Header
                    style={{
                        position: 'fixed',
                        top: 0,
                        zIndex: 100,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 2rem',
                    }}

                >
                    <div className='container mx-auto flex items-center relative'>
                        <a href='/'><img src={logoImage} className="demo-logo mx-8" alt='logo' width={48} /></a>
                           <ul className=''>
                            <li className='menu-items '>
                               <a href='#'> Genres</a>
                                    
                                    <Genres/>
                                    
                            </li>
                        </ul>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['0']}
                            items={items}
                            style={{ flex: 1, minWidth: 0, fontSize: 20 }}

                        />
                     
                        <button onClick={searchHandler}>
                        <IoSearch  size={"24"} color='white'/>

                        </button>
                    </div>

                </Header>

            </Layout>
            <SearchDrawer open={open} setOpen={setOpen} />
        </>
    )
}

export default HeaderAnt