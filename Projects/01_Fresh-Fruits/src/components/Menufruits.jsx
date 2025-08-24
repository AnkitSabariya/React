import React from 'react'

function Menufruits({ img, title, price }) {
  return (
    <div className='flex items-center gap-5 shadow-custom-card rounded-[25px] w-[312px] h-[100px] px-6 
      transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'>
      
      <div>
        <img 
          src={img} 
          alt="" 
          className='w-[75px] relative bottom-8 transition-transform duration-300 group-hover:scale-110' 
        />
      </div>
      <div>
        <h2 className='text-lg font-semibold tracking-normal'>{title}</h2>
        <p className='text-lg font-semibold text-[#F5923C]'>{price}</p>
      </div>
    </div>
  )
}

export default Menufruits
