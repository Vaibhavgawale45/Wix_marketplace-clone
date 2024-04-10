import React from 'react';


const Card = ( props ) => {
  return (
    <div >
      
      <div className="px-6 py-4 ">
        <img className='w-[600x] h-[250px]'
        src={props.image} alt="fdv" />
        <div className="font-bold text-2xl pt-10 mb-2">{props.title}</div>
        <p className="text-gray-700 text-xl md:w-[300px] xl:w-[400px]">{props.description}</p>
        <button className='hover:text-blue-600'>
        <p className=' underline pt-4 font-medium text-lg'> Explore Now  </p> 
        </button>
      </div>
    </div>
  );
};

export default Card;
