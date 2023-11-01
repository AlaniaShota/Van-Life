import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getVans } from '../../utils/api'
import VanCard from './Components/VanCard'

export function loader({ params }) {
    return getVans(params.id)
}

const VansSinglePage = () => {
    const van = useLoaderData()

    return (
        <div className='m-5'>
            <VanCard
                name={van.name}
                price={van.price}
                imageUrl={van.imageUrl}
                type={van.type}
                description={van.description} />
        </div>
    )
}

export default VansSinglePage