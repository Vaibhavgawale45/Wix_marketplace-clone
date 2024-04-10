import React from 'react'

const footer = () => {
  return (
    <div>
        <div className='bg-[#FFFFFF] w-full h-[560px] '>
          
         <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 justify-center pl-20 lg:space-x-12
          space-y-12 mt-20 pr-20'>
         <ul className='space-y-3 text-gray-700 pt-14 hidden sm:block'> 
            <li className='font-semibold'>Product</li>
            <li>Website Templates</li>
            <li>Website Builder</li>
            <li>Website Design</li>
            <li>Wix Features</li>
            <li>App Market</li>
            <li>Web Hosting</li>
            <li>Domain Names</li>
            <li>Website Accessibility</li>
            <li>Mobile App Builder</li>
          </ul>

          <ul className='space-y-3 text-gray-600 hidden sm:block'>
            <li className='font-semibold'>Solutions</li>
            <li>Online Store</li>
            <li>Restaurant Website</li>
            <li>Blog Website</li>
            <li>Portfolio Website</li>
            <li>eCommerce Website</li>
            <li>Wix Studio</li>
            <li>Enterprise Solutions</li>
            <li>Student Website</li>
            <li>Professional Tools</li>
            <li>Logo Maker</li>
          </ul>

          <ul className='space-y-3 text-gray-600 hidden sm:block'>
            <li className='font-semibold'>Learn</li>
            <li>Wix Blog</li>
            <li>Privacy and Security Hub</li>
            <li>SEO Learning Hub</li>
            <li>Wix Encyclopedia</li>
          </ul>

          <ul className='space-y-3 text-gray-600 hidden sm:block'>
            <li className='font-semibold'>Support</li>
            <li>Help Center</li>
            <li>Hire a Professional</li>
            <li>Report Abuse</li>
            <li>System Status</li>

          </ul>

          <ul className='space-y-3 text-gray-600 hidden sm:block'>
            <li className='font-semibold'>Company</li>
            <li>Press & Media</li>
            <li>Investor Relations</li>
            <li>Wix Capital</li>
            <li>Accessibility Statement</li>
            <li>Patent Notice</li>
            <li>Sitemap</li>
            <li>Careers</li>

          </ul>

          <div className='space-y-3'>
            <h1 className='text-4xl font-bold'>WIX</h1>
            <p className='w-[250px] pt-6 text-gray-600'>The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.</p>
            <h2 className='font-semibold text-gray-600'>About</h2>
            <h2 className='font-semibold text-gray-600'>Contact Us</h2>
          </div>
         </div>

         <div className='bg-gray-300 w-full h-[1px] mt-20 '></div>


         <div className='flex flex-col md:flex-row space-y-12 justify-around pt-10 pb-10 pl-10'> 

            {/* logo*/}
            <div className='flex space-x-2 md:pt-10'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
             </svg>

             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
             <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
             </svg>

             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
             <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
             </svg>

             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
             <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"></path>
             </svg>

             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="20" viewBox="0 0 50 50" className='mt-1'>
             <path d="M25,2C12.3178711,2,2,12.3178711,2,25c0,9.8841553,6.2675781,18.3302612,15.036377,21.5769653	c-0.2525635-2.2515869-0.2129517-5.9390259,0.2037964-7.7243652c0.3902588-1.677002,2.5212402-10.6871338,2.5212402-10.6871338	s-0.6433105-1.2883301-0.6433105-3.1911011c0-2.9901733,1.7324219-5.2211914,3.8898315-5.2211914	c1.8349609,0,2.7197876,1.3776245,2.7197876,3.0281982c0,1.8457031-1.1734619,4.6026611-1.78125,7.1578369	c-0.506897,2.1409302,1.0733643,3.8865356,3.1836548,3.8865356c3.821228,0,6.7584839-4.0296021,6.7584839-9.8453369	c0-5.147583-3.697998-8.7471924-8.9795532-8.7471924c-6.1167603,0-9.7072754,4.588562-9.7072754,9.3309937	c0,1.8473511,0.7111816,3.8286743,1.6000977,4.9069824c0.175293,0.2133179,0.2009277,0.3994141,0.1488647,0.6160278	c-0.1629028,0.678894-0.5250854,2.1392822-0.5970459,2.4385986c-0.0934448,0.3944702-0.3117676,0.4763184-0.7186279,0.2869263	c-2.685791-1.2503052-4.364502-5.1756592-4.364502-8.3295898c0-6.7815552,4.9268188-13.0108032,14.206543-13.0108032	c7.4588623,0,13.2547607,5.3138428,13.2547607,12.4179077c0,7.4100342-4.6729126,13.3729858-11.1568604,13.3729858	c-2.178894,0-4.2263794-1.132019-4.9267578-2.4691772c0,0-1.0783081,4.1048584-1.3404541,5.1112061	c-0.4524536,1.7404175-2.3892822,5.3460083-3.3615723,6.9837036C20.1704712,47.6074829,22.5397949,48,25,48	c12.6826172,0,23-10.3173828,23-23C48,12.3178711,37.6826172,2,25,2z"></path>
             </svg>

             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
             <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
             </svg>

             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
             <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
             </svg>
       
            </div>

            {/*terms and condn*/}
            
            <ul className='flex text-gray-600 text-sm  space-x-8' >
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>© 2006-2024 Wix.com, Inc</li>
            </ul>

         </div>
        </div>

        
        
    </div>
  )
}

export default footer
