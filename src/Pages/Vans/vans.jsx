import React, { useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import { getVans } from '../../utils/api'
import VansLibrary from './Components/VansLibery'
import FilterButton from './Components/FilterButton'


export function loader() {
    return getVans()
}

const Vans = () => {
    const [error, setError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const vans = useLoaderData()

    const typeFilter = searchParams.get('type')

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className='m-5'>
            <h1 className='text-[27px] font-semibold leading-8'>Explore our van options</h1>
            <FilterButton search={setSearchParams} typeFilter={typeFilter} />
            <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8 items-center justify-center justify-items-center my-8'>
                <VansLibrary vans={displayedVans} searchParams={searchParams} typeFilter={typeFilter} />
            </div>
        </div>
    )
}

export default Vans