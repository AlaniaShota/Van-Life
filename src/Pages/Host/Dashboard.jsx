import React from 'react'
import {  Link, useLoaderData } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt } from '@fortawesome/free-regular-svg-icons'
import { getHostVans } from '../../utils/api'

export async function loader() {
    return getHostVans()
}

const Dashboard = () => {
    const loaderData = useLoaderData()

    return (
        <>
            <div className='flex flex-col mx-[26px] my-4 lg:w-[595px]'>
                <div className='flex flex-col bg-[#FFEAD0] rounded-t-lg py-[37px] px-[27px]'>
                    <h1 className='text-[36px] font-bold leading-6'>Welcome!</h1>
                    <div className='flex justify-between my-[34px]'>
                        <p className='text-[#4D4D4D] text-[17px] font-medium leading-6'>Income last <span className='text-[#4D4D4D] underline text-[17px] font-bold leading-6'>30 days</span></p>
                        <Link to='income' className='text-end text-[17px] font-medium leading-6'>Details</Link>
                    </div>
                    <h1 className='text-[48px] font-extrabold leading-7'>$2,260</h1>
                </div>
                <div className='flex flex-row justify-between bg-[#FFDDB2] rounded-b-lg py-[37px] px-[27px]'>
                    <div className='flex flex-row'>
                        <h1 className='text-[24px] font-bold leading-6'>Review score</h1>
                        <p className='pl-[12px]'>
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                            4.0/<span className='text-[#4D4D4D]'>5</span>
                        </p>
                    </div>
                    <Link to='reviews' className='text-end text-[17px] font-medium leading-6'>Details</Link>
                </div>
            </div>

            <div className='flex flex-col mx-[26px] my-4 lg:w-[595px]'>
                <div className='flex flex-row justify-between py-[37px] px-[27px]'>
                    <h2 className='text-[24px] font-bold leading-6'>Your listed vans</h2>
                    <Link to="vans" className='text-end text-[17px] font-medium leading-6'>View all</Link>
                </div>
                {/* <div> */}
                    {loaderData.slice(3).map((item) => (
                        <Link to={item.id} key={item.id} className='flex bg-[#fff] my-2 rounded-lg '>
                            <div className='inline-flex pl-[24px] py-[18px]'>
                                <img src={item.imageUrl} alt={item.name} className='w-[75px] h-[75px] rounded-lg' />
                                <div className='flex flex-col justify-center ml-[17px]'>
                                    <h3 className='text-[20px] font-semibold leading-8 '>{item.name}</h3>
                                    <p className='text-[16px] font-medium leading-8 text-[#4D4D4D]'>${item.price}/day</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                {/* </div> */}
            </div>
        </>
    )
}

export default Dashboard