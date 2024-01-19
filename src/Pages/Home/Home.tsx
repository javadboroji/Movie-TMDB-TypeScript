import React from 'react'
import HeaderAnt from '../../Component/Heaader/Header'
import Banner from '../../Component/Banner/Banner'
import TopRate from '../../Component/TopRate/TopRate'
import NowPlay from '../../Component/NowPlay/NowPlay'
import Genres from '../../Component/Genres/Genres'
import UnComing from '../../Component/UnComing/UnComing'
import PopularPeople from '../../Component/PopularPeople/PopularPeople'

function Home() {
    return (
        <>
            <Banner />
            <TopRate />
            <NowPlay />
            <UnComing/>
            <PopularPeople />
        </>
    )
}

export default Home