import React from 'react'
import { Link } from 'react-router-dom'
const VansLibrary = ({ vans, searchParams, typeFilter }) => {

  return (
    <>
      {vans.map(item => (
        <div key={item.id} className='w-[230px] hover:scale-102 ease-linear duration-1000'>
          <Link to={item.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
            <img src={item.imageUrl} alt="Van" className=' rounded-lg object-cover h-[230px] w-[230px]  ' />
            <div className='inline-flex justify-between w-[230px] '>
              <h3 className='text-[#161616] text-[20px] font-semibold leading-8'>{item.name}</h3>
              <p className='text-[#161616] text-[20px] font-semibold leading-8'>${item.price}
                <span className='text-[#161616] text-[14px] font-normal '>/day</span>
              </p>
            </div>
            <i className={`rounded-lg bg-[#FFEAD0] py-1 px-3`}>
              <span className=' text-[16px] text-center font-semibold leading-8 '>{item.type}</span>
            </i>
          </Link>
        </div>
      ))}
    </>
  )
}

export default VansLibrary