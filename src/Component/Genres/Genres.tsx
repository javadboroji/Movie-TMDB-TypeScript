import React from 'react'
import { useGenresMovie } from '../../Hoock'
import { GenresInner } from '../../types';

function Genres() {
    const{data}=useGenresMovie();
    console.log(data);
    
  return (
    
            <ul className='genre-ul absolute flex flex-col  flex-wrap' style={{width:'25rem',background:'#001529',top:'100%',right:'10%',left:'0%',padding:'1rem' ,maxHeight:'20rem'}}>
            {data&&data.map((genr:GenresInner)=>{return(
                <li key={genr.id} className='genr-hover'>
                    {genr.name}
                </li>
            )})}
            </ul>
  
  )
}

export default Genres