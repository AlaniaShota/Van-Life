import React from 'react'
import imageHome from '../assets/image 53.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex lg:justify-between lg:mx-[140px] md:mx-[20px] lg:my-10 sm:my-5 sm:gap-2 '>
            <img src={imageHome} alt="Loading" className='lg:w-[540px] md:w-[750px] sm:w-[750px] h-[440px] rounded object-cover hover:scale-105 ease-linear duration-1000 ' />
            <div className='flex lg:relative sm:absolute lg:px-[26px] sm:px-[15px] sm:py-[15px] md:my-[20px] sm:my-[10px] md:px-[40px]'>
                <div className='flex flex-wrap justify-evenly  flex-col  sm:h-[420px] '>
                    <h1 className='lg:text-[#000] md:text-[#fff] sm:text-[#fff]  lg:text-[36px] sm:text-[27px] font-semibold text-center lg:leading-10 md:leading-8 sm:leading-8 py-[5px] cursor-default'>You got the travel plans, we got the travel vans.</h1>
                    <p className='lg:text-[#000] md:text-[#fff] sm:text-[#fff] lg:text-[16px] sm:text-[14px] font-medium text-center lg:leading-6 lg:py-[15px] sm:py-[5px] cursor-default'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <Link to='/vans' className='flex justify-center items-center bg-[#FF8C38] rounded h-[49px] hover:shadow-xl transition duration-1000 ease-in-out  '>
                        <span className='text-[#fff] text-[16px] sm:text-[15px] font-bold lg:leading-8'>Find your van</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home