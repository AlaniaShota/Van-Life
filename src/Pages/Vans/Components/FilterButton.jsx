import React from 'react'

const FilterButton = ({ search, typeFilter }) => {
    return (
        <div className='mt-[15px] mb-[25px] '>
            <button onClick={() => search({ type: 'simple' })}
                className='mr-5 w-[104px] rounded-lg bg-[#FFEAD0] font-semibold py-2 px-5 hover:bg-transparent focus:bg-transparent'>Simple</button>
            <button onClick={() => search({ type: 'luxury' })}
                className='mr-5 w-[104px] rounded-lg bg-[#FFEAD0] font-semibold py-2 px-5 hover:bg-transparent focus:bg-transparent'>Luxury</button>
            <button onClick={() => search({ type: 'rugged' })}
                className='mr-5 w-[104px] md:mt-0 sm:mt-2 rounded-lg bg-[#FFEAD0] font-semibold py-2 px-5 hover:bg-transparent focus:bg-transparent'>Rugged</button>
            {typeFilter ? <button onClick={() => search({})} className='hover:border-b-2 border-black w-[104px]'>Clear Filter</button> : null}
        </div>
    )
}

export default FilterButton