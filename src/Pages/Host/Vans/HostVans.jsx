import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../../utils/api'
import HostVanLibrary from './Components/HostVanLibrary'


export async function loader() {
    return getHostVans()
}

const HostVans = () => {
    const vans = useLoaderData()

    return (
        <section className='mx-[26px]'>
            <h1 className="text-[31px] font-bold leading-8 my-4">Your listed vans</h1>
            <section className='grid grid-cols-1 lg:w-[595px]'>
                <HostVanLibrary vans={vans} />
            </section>
        </section>
    )
}

export default HostVans