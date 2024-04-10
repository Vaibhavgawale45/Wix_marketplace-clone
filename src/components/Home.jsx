import React from 'react'
import img1 from '../images/png1.png'


const Home = () => {
  return (
    <div>

      <div className='flex flex-col lg:flex-row bg  '>

        {/* left */} 
        <div className=' mt-20 xl:mt-40 pl-28 lg:pl-8 xl:pl-32  '>

          <h1 className='text-white md:text-6xl sm:text-5xl lg:text-4xl xl:text-6xl text-4xl font-bold xl:w-[600px] '
          >Hire a professional <br/> agency or freelancer</h1>

          <button className='text-black text-xl border border-gray-600 rounded-full mt-10
          bg-white item-center py-4 hover:text-blue-600 sm:w-[400px] '
          >Browse services</button>

            <p className='text-white lg:text-3xl xl:text-4xl font-bold mt-12 invisible lg:visible'
            >Top requested pros</p>

           <div className='grid grid-cols-2 gap-3 mt-8  xl:grid-cols-3 invisible lg:visible '>

            <button className='border border-white rounded-full py-2  text-white
            hover:bg-white hover:text-black
            '>Web Designer</button>
            <button className='border border-white rounded-full py-2  text-white
            hover:bg-white hover:text-black
            '>Web Designer</button>
            <button className='border border-white rounded-full py-2  text-white
            hover:bg-white hover:text-black
            '>Web Designer</button>
            <button className='border border-white rounded-full py-2  text-white
            hover:bg-white hover:text-black
            '>Web Designer</button>
            <button className='border border-white rounded-full py-2  text-white
            hover:bg-white hover:text-black
            '>Web Designer</button>
            <button className='border border-white rounded-full py-2  text-white
            hover:bg-white hover:text-black
            '>Web Designer</button>
            
          </div>


        </div>

        {/* right */}
        <div className='lg:ml-40 ml-12 -mt-80 lg:mt-20'>
          <img  className='' 
           src={img1} alt="error" />
        
        </div> 
      </div>


      {/*Hero section*/}

      <div className='bg-[#F4F4F4] w-full lg:h-[385px] flex flex-col justify-center items-center md:flex-row pt-20 md:pt-12 pb-12 md:pl-28 md:pr-10
       space-y-8 md:space-x-10'> 

       <div>
          <h1 className='font-bold text-5xl md:text-4xl lg:text-5xl md:pt-8'>680K requests</h1>
          <p className='pl-20 md:pl-1 xl:pl-20 text-lg pt-3 text-gray-600'>submitted in 2021</p>
       </div>

       <div className='w-[300px] h-[1px] bg-slate-950 md:hidden'></div>

       <div className='w-[1px] h-[150px] bg-slate-950 hidden md:block '></div>

       <div>
          <h1 className='font-bold text-5xl md:text-4xl lg:text-5xl'>195 countries</h1>
          <p className='pl-14 md:pl-1 xl:pl-14 text-lg pt-3 text-gray-600'>access the Marketplace</p>
       </div>

       <div className='w-[300px] h-[1px] bg-slate-950 md:hidden'></div>

       <div className='w-[1px] h-[150px] bg-slate-950 hidden md:block'></div>

       <div>
          <h1 className='font-bold text-5xl md:text-4xl lg:text-5xl'>4.9/5 rating</h1>
          <p className='pl-6 md:pl-1 xl:pl-6  text-lg pt-3 text-gray-600'>average client satisfaction </p>
       </div>
      </div>


      {/*Hero section*/}

      <div className=' h-[460px] flex flex-col justify-center items-start  md:w-[700px] lg:w-[800px] 
      pl-20 md:pl-28 lg:pl-32 xl:pl-52 '>

        <p className='font-bold text-5xl  '>Explore services for every stage of your business</p>

        <p className='text-lg pt-10  text-gray-500 '>Select services and browse through a curated list of professionals
           who can  help you reach your goals. You can filter matches by location, 
           price and  language, view their portfolios and read reviews. </p>

      </div>

     

          
    </div>
  )
}

export default Home
