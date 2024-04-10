import React from 'react'
import png2 from '../images/png2.png'



const Detail2 = () => {
  return (
    <div>
        <div className='bg2 flex flex-col lg:flex-row mt-16 relative '>

            {/*left part */}

            <div className='ml-10 mr-10'>
                <h1 className='text-white font-medium text-6xl mt-28 '>Who are our pros?</h1>

                <h2 className='text-white font-semibold text-3xl mt-16  '>They’re industry leaders</h2>
                
                <p className='text-white text-lg md:w-[650px] lg:w-[320px]  mt-4'>Wix Partners are the masterminds 
                behind some of the most successful brands, businesses and sites on Wix. Whether they’re designers, 
                developers or marketers, they’re all vetted, trusted leaders in their fields.</p>

                <h2 className='text-white font-semibold text-3xl mt-24 '>They’re specially selected </h2>

                <p className='text-white text-lg md:w-[650px] lg:w-[320px]  mt-4'> Each of our professionals
                 have been pre-screened for quality. They’re not Wix employees, they’re just real people with real
                  skills who want to help you reach your goals.</p>

                <h2 className='text-white font-semibold text-3xl mt-24 '>They’re ready to do the heavy lifting</h2>

                <p className='text-white text-lg md:w-[650px] lg:w-[320px]  mt-4'>From big projects to small tasks,
                 no matter the brief you can rest assured knowing that they’ll deliver.</p>
                 
            </div>



            {/*right part */}

            <img  className='ml-5 mr-5  '
             src={png2} alt="" />
        

        </div>

        
      
    </div>
  )
}

export default Detail2
