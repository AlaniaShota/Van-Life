import React from 'react'

const HostVanCard = ({ van }) => {
  return (
    <div className='flex justify-around '>
      <div className='flex  items-center lg:flex-row md:flex-row sm:flex-col mx-[25px]'>
        <img src={van.imageUrl} alt={van.name} className='lg:w-[360px] md:w-[360px] sm:w-[260px] object-contain rounded-xl lg:my-[15px] md:my-[10px] sm:my-[15px]' />
        <div className='flex flex-col lg:ml-[20px] md:ml-[15px] sm:mr-[47px] justify-center items-start'>
          <i className='bg-[#E17654] rounded-md'>
            <span className='text-center text-[#FFEAD0] text-[16px] leading-7 font-semibold px-3 py-1'>{van.type}</span>
          </i>
          <h3 className=' lg:text-[24px] md:text-[24px] sm:text-[21px] font-bold leading-7 lg:my-[11px] sm:my-[5px]'>{van.name}</h3>
          <p className='lg:text-[24px] md:text-[21px] sm:text-[17px] font-bold leading-8'>${van.price}
            <span className='lg:text-[19px] md:text-[19px] sm:text-[17px] font-medium leading-8'>/day</span>
          </p>
        </div>
      </div>
    </div>

  )
}

export default HostVanCard