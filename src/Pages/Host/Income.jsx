import React from 'react'
import imageIncome from '../../assets/income-graph.png'

const Income = () => {
  const transactionsData = [
    { amount: 720, date: "01/03/23", id: "1" },
    { amount: 560, date: "12/12/22", id: "2" },
    { amount: 980, date: "12/03/22", id: "3" },
  ]
  return (
    <div className="flex flex-col mx-[26px] my-4 lg:w-[595px]">
      <h1 className='text-[32px] font-bold leading-6'>Income</h1>
      <p className='text-[16px] font-medium leading-6 text-[#4D4D4D] mt-[35px]'>
        Last <span className='text-[16px] font-medium leading-6 text-[#4D4D4D] underline'>30 days</span>
      </p>
      <h2 className='text-[48px] font-extrabold leading-9 mt-[31px]'>$2,260</h2>
      <img
        className="my-[23px] w-[430px] object-cover"
        src={imageIncome}
        alt="Income graph"
      />
      <div className="flex flex-row justify-between">
        <h3 className='text-[24px] font-bold leading-6'>Your transactions (3)</h3>
        <p className='text-[16px] text-[#4D4D4D] font-medium leading-6 '>
          Last <span className='text-[16px] text-[#4D4D4D] underline font-bold leading-6'>30 days</span>
        </p>
      </div>
      <div className="">
        {transactionsData.map((item) => (
          <div key={item.id} className="flex flex-row justify-between rounded-lg bg-[#fff] mt-[15px] py-[19px]">
            <h3 className='text-[32px] font-semibold leading-8 pl-[29px]'>${item.amount}</h3>
            <p className='text-[#4D4D4D] text-[20px] font-medium pr-[29px]'>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Income