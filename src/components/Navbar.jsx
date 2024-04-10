import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-[#FFFFFF] h-[60px]  ' >
        <div className='flex items-center justify-between  '>
            {/* left */} 
            <div className='ml-10 mt-4 lg:mt-1'>
                  <ul className='flex space-x-8'>
                    <li className=' text-xl'>
                    <span className='font-bold'>WIX</span> Makretplace</li>
                    <li className='text-lg hidden lg:block'>All services</li>
                    <li className='text-lg hidden lg:block'>Get Hired</li>
                  </ul>
            </div>
            {/* right */} 
            <div className=' bg-black w-[250px] h-[60px]  pt-4 px-14 hidden lg:block'>
                <h1 className='text-white '>Find a Professional</h1>
               

            </div>

        </div>


       
    </div>
  )
}

export default Navbar
