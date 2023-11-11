import React from 'react'
import imageReviews from '../../assets/reviews-graph.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ]

  return (
    <div className='flex flex-col mx-[26px] my-4 lg:w-[595px]'>
      <div className='flex flex-row'>
        <h1 className='text-[32px] font-bold leading-8'>Your reviews</h1>
        <p className='text-[16px] font-bold leading-5 text-[#4D4D4D] pt-[12px] pl-[10px]'>last 30 days</p>
      </div>
      <img src={imageReviews} alt="Reviews Graph" className='my-[23px] w-[430px] object-cover' />
      <div className='flex flex-col'>
        <h2 className='text-[#161616] text-[18px] font-bold'>Reviews (2)</h2>
        {reviewsData.map((item) => (
          <div key={item.id}>
            <div className="mt-[20px]">
              {[...Array(item.rating)].map((_, i) => (
                <FontAwesomeIcon icon={faStar} key={i} />
              ))}
              <div className="flex flex-row text-[16px] font-semibold leading-8  mt-[11px]">
                <p className="text-[#161616] mt-[7px]">{item.name}</p>
                <p className="text-[#8C8C8C] mt-[7px] pl-[10px]">{item.date}</p>
              </div>
              <p className='text-[16px] font-medium leading-6'>{item.text}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews