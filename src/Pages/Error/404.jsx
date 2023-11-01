import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center my-[204px]'>
            <h1 className='text-[32px] font-bold leading-10'>Sorry, the page you were looking for was not found.</h1>
            <Link to='/' className='flex items-center mt-[30px] h-[55px] rounded-md bg-[#161616]'>
                <span className=' text-[#FFFFFF] text-[18px] h-[30px] font-bold  px-[143px] '>Return to home</span>
            </Link>
        </div>
    )
}

export default ErrorPage