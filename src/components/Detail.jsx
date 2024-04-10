import React from 'react'

const Detail = (props) => {
  return (
    <>
    
    <div className='pt-10 pl-32 md:pl-8 xl:pl-8 '>
      <p className='text-white text-3xl'>{props.k}</p>
      <div className='w-[360px] md:w-[180px] lg:w-[250px] xl:w-[360px] h-[1px] bg-white'></div>
      <p className='text-white pt-12 font-medium text-xl'> {props.title}</p>
      <p className='text-white text-lg pt-6 w-[400px] md:w-[200px] lg:w-[300px] xl:w-[400px] '>{props.description}</p>
    </div></>
  )
}

export default Detail
