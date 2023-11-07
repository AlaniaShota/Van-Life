import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const fakeLogOut = () => {
        localStorage.removeItem('loggedin')
    }

    return (
        <>
            <header className="inline-flex justify-between items-center w-full bg-[#FFF7ED] px-[26px] py-[20px] border-b border-black">
                <NavLink to="/" className="lg:text-[25px] sm:text-[21px] font-black" >
                    #VANLIFE
                </NavLink>
                <nav className=" text-[16px] font-semibold text-[#4D4D4D]">
                    <NavLink to="host" className="lg:mr-5 sm:mr-2" style={({ isActive }) => isActive ? activeStyle : null}>
                        Host
                    </NavLink>
                    <NavLink to="about" className="lg:mr-5 sm:mr-2" style={({ isActive }) => isActive ? activeStyle : null}>
                        About
                    </NavLink>
                    <NavLink to="vans" className="lg:mr-5 sm:mr-2" style={({ isActive }) => isActive ? activeStyle : null}>
                        Vans
                    </NavLink>
                    <Link to="login" >
                        <FontAwesomeIcon icon={faCircleUser} size='xl' />
                    </Link >
                    <button onClick={() => fakeLogOut()}>X</button>
                </nav>
            </header>
        </>
    )
}

export default Header

