import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className=' text-white font-[font2] flex items-center justify-center gap-2 '>
        <Link className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-44 flex items-center px-10 mt-6 text-[6vw]  border-white rounded-full  '>Projects</Link>
        <Link className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-44 flex items-center px-10 mt-6 text-[6vw]  border-white rounded-full  '>Agency</Link>
    </div>
  )
}

export default HomeBottomText