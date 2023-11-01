import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const VanCard = ({ name, price, imageUrl, type, description }) => {
    const location = useLocation()

    const search = location.state?.search || ''
    const searchType = location.state?.type || 'all'


    return (
        <>
            <Link to={`..${search}`} relative='path' className='flex justify-end items-center pr-[57px]'>&larr; Back to {searchType} vans</Link>
            <div className='flex lg:justify-around lg:flex-row sm:flex-col lg:my-[39px]'>
                <div>
                    <img src={imageUrl} alt="Van" className='object-cover lg:w-[585px] sm:w-full rounded-lg  sm:m-0 md:my-5 hover:scale-105 ease-linear duration-1000 md:h-[360px] ' />
                </div>
                <div className='flex flex-col lg:justify-center lg:items-center sm:my-10 text-[#161616]'>
                    <div className='flex flex-col items-start w-[495px] '>
                        <h3 className='lg:text-[32px] md:text-[27px] sm:text-[21px] font-bold leading-8'>{name}</h3>
                        <p className='lg:text-[24px] md:text-[21px] sm:text-[17px] font-bold leading-9'>${price}
                            <span className='lg:text-[14px] md:text-[21px] sm:text-[17px] font-semibold '>/day</span>
                        </p>
                        <i className={`rounded-lg bg-[#FFEAD0] py-1 px-3`}>
                            <span className='text-[16px] font-semibold leading-8 '>{type}</span>
                        </i>
                    </div>
                    <div className='flex flex-col  items-center mt-10  lg:w-[495px] sm:w-full'>
                        <p className='lg:text-[18px] md:text-[16] sm:text-[14] font-medium leading-6 text-start'>{description}</p>
                        <Link className='mt-5 rounded-lg bg-[#FF8C38] w-full text-center text-[#FFFFFF] lg:text-[18px] md:text-[16px] sm:text-[14px] font-bold leading-8'>
                            Rent this van
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default VanCard