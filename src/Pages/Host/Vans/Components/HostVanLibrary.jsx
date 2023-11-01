import React from 'react'
import { Link } from 'react-router-dom'

const HostVanLibrary = ({ vans }) => {
    return (
        <>
            {vans.map(item => (
                <Link to={item.id} key={item.id} className='flex bg-[#fff] my-2 rounded-lg '>
                    <div className='inline-flex pl-[24px] py-[18px]'>
                        <img src={item.imageUrl} alt={item.name} className='w-[75px] h-[75px] rounded-lg' />
                        <div className='flex flex-col justify-center ml-[17px]'>
                            <h3 className='text-[20px] font-semibold leading-8 '>{item.name}</h3>
                            <p className='text-[16px] font-medium leading-8 text-[#4D4D4D]'>${item.price}/day</p>
                        </div>
                    </div>
                </Link>
            ))}

        </>
    )
}

export default HostVanLibrary