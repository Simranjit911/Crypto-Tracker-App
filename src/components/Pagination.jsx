
import React, { useContext } from 'react'
import CoinContext from '../pages/CoinContext';
import { button } from '@material-tailwind/react';

const Pagination = () => {
  const { page, setpage } = useContext(CoinContext);

    let pages=[]
    for(let i=0;i<10;i++){
        pages.push(i)
    }
    console.log("page"+pages)
  return (
    <div className=' flex flex-wrap  justify-center '>
        {
            pages.map((p,i)=>{
                return  (page==i+1?<button className=' bg-gray text-white border m-1 px-2 mb-4 active:bg-gray-600 visited:bg-red-600' onClick={()=>setpage(i+1)} key={i}>{p+1}</button>:
                <button className=' bg-white m-1 px-2 mb-4 active:bg-gray-600 visited:bg-red-600' onClick={()=>setpage(i+1)} key={i}>{p+1}</button>)
            })
        }
    </div>
  )
}

export default Pagination