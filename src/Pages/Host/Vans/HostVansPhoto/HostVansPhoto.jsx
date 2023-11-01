import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVansPhoto = () => {
    const { currentVan } = useOutletContext()
    return (
        <div className='mt-[15px]'>
            <img src={currentVan.imageUrl} alt={currentVan.name} className='object-cover w-[103px] rounded-md'/>
        </div>
    )
}

export default HostVansPhoto