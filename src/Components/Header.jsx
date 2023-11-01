import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <header className="inline-flex justify-between items-center w-full bg-[#FFF7ED] px-[26px] py-[20px] border-b border-black">
                <NavLink to="/" className="text-[25px] font-black" >
                    #VANLIFE
                </NavLink>
                <nav className=" text-[16px] font-semibold text-[#4D4D4D]">
                    <NavLink to="/host" className="mr-5" style={({ isActive }) => isActive ? activeStyle : null}>
                        Host
                    </NavLink>
                    <NavLink to="/about" className="mr-5" style={({ isActive }) => isActive ? activeStyle : null}>
                        About
                    </NavLink>
                    <NavLink  to="/vans" style={({ isActive }) => isActive ? activeStyle : null}>Vans</NavLink >
                </nav>
            </header>
        </>
    )
}

export default Header