import React, { useState } from 'react';
import rating from '../images/rating.png'

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!data || data.length === 0) {
    return <div>No data available for the carousel</div>;
  }

  return (
    <div className="relative">
      <div>
      <div className="text-center  flex flex-col justify-center items-center pt-8">
          <p className="text-xl text-gray-600 lg:w-[820px] pl-10 pr-10"
          >{data[currentIndex].description}</p>

          <img src={rating} alt="star error"  
          className='w-[160px] h-[150px] '/>

          <h3 className="text-lg  font-semibold">{data[currentIndex].name}</h3>
          
          <p className='text-lg pt-6'>{data[currentIndex].title}</p>
        </div>
        <img
          src={data[currentIndex].src}
          alt={data[currentIndex].title}
          className="w-[800px] h-[500px] mx-auto mt-10 hidden lg:block"
        />
        
      </div>


      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
        <button
          className=" text-black p-2 absolute left-72 bottom-40 hidden lg:block"
          onClick={goToPreviousSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
        </button>
        <button
          className=" text-black p-2 absolute right-72 bottom-40 hidden lg:block"
          onClick={goToNextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
