import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVansPricing = () => {
    const { currentVan } = useOutletContext()
    return (
        <>
            <h4 className='lg:mt-[15px] md:mt-[11px] sm:mt-[8px] lg:text-[21px] md:text-[18px] sm:text-[17px] font-semibold leading-7'>
                ${currentVan.price}<span className='lg:text-[18px] md:text-[17px] sm:text-[16px] font-normal text-[#4D4D4D]'>/day</span>
            </h4>
        </>
    )
}

export default HostVansPricing