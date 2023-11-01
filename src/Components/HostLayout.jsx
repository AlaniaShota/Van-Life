import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className='px-[26px] py-[20px]'>
                <NavLink to='.' end
                    style={({ isActive }) => isActive ? activeStyle : null} className='mr-5'>Dashboard</NavLink>
                <NavLink to='income'
                    style={({ isActive }) => isActive ? activeStyle : null}
                    className='mr-5'>Income</NavLink>
                <NavLink to='vans'
                    style={({ isActive }) => isActive ? activeStyle : null}
                    className='mr-5'>Vans</NavLink>
                <NavLink to='reviews'
                    style={({ isActive }) => isActive ? activeStyle : null}
                    className='mr-5'>Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout