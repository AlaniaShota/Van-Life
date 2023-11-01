import React from 'react'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../../utils/api'
import HostVanCard from './Components/HostVanCard'

export function loader({ params }) {
  return getHostVans(params.id)
}

const HostVansDetail = () => {
  const currentVan = useLoaderData()

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <>
      <Link to='..' relative='path' className='px-[26px] '>&larr; Back to all</Link>
      <div className='bg-[#fff] rounded-xl grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:py-[10px] sm:py-0 mx-[26px] lg:my-[40px] sm:my-[20px]'>
        <HostVanCard van={currentVan} />
        <nav className='lg:my-[55px] md:my-[25px] sm:my-[15px] md:mx-[56px] sm:mx-[29px]'>
          <NavLink to='.' end
            style={({ isActive }) => isActive ? activeStyle : null}
            className='mr-5'>Details</NavLink>
          <NavLink to='pricing'
            style={({ isActive }) => isActive ? activeStyle : null}
            className='mr-5'>Pricing</NavLink>
          <NavLink to='photo'
            style={({ isActive }) => isActive ? activeStyle : null}
            className='mr-5'>Photos</NavLink>
          <Outlet context={{ currentVan }} />
        </nav>
      </div>
    </>

  )
}

export default HostVansDetail