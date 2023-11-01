import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVansInfo = () => {
    const { currentVan } = useOutletContext()

    return (
        <div className='flex flex-col lg:pr-[25px] md:pr-[24px]'>
            <h4 className='lg:mt-[15px] md:mt-[11px] sm:mt-[8px] lg:text-[21px] md:text-[18px] sm:text-[17px] font-semibold leading-7'>Name:
                <span className='lg:text-[18px] md:text-[17px] sm:text-[16px] font-normal leading-5'> {currentVan.name}</span>
            </h4>
            <h4 className='lg:mt-[15px] md:mt-[11px] sm:mt-[8px] lg:text-[21px] md:text-[18px] sm:text-[17px] font-semibold leading-7'>Category:
                <span className='lg:text-[18px] md:text-[17px] sm:text-[16px] font-normal leading-5'> {currentVan.type}</span>
            </h4>
            <h4 className='lg:mt-[15px] md:mt-[11px] sm:mt-[8px] lg:text-[21px] md:text-[18px] sm:text-[17px] font-semibold leading-7'>Description:
                <span className='lg:text-[18px] md:text-[17px] sm:text-[16px] font-normal leading-5'> {currentVan.description}</span>
            </h4>
            <h4 className='lg:mt-[15px] md:mt-[11px] sm:mt-[8px] lg:text-[21px] md:text-[18px] sm:text-[17px] font-semibold leading-7'>Visibility:
                <span className='lg:text-[18px] md:text-[17px] sm:text-[16px] font-normal leading-5'> Public</span>
            </h4>
        </div>
    )
}

export default HostVansInfo