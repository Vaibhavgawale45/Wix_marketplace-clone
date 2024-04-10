
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Card from './components/Cards'
import cardsData from './data/cardsData';
import data from './data/data'
import Detail from './components/Detail';
import Detail2 from './components/Detail2';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Carousel from './components/Carousel';


const CarouselData = [
  {
        description:'“Olya clearly understood our requirements and responded with an effective action plan. The result was a super intuitive and professional website we’re extremely proud of.”',
        name:'Zaher Iyaso',
        title:'Website redesign by Wix Partner Olya Black',
        src:'https://static.wixstatic.com/media/0784b1_416d43ea13e94f7b989fd88dcb928b34~mv2.jpg/v1/fill/w_854,h_493,al_c,q_85,enc_auto/apexbrandengineers.jpg',
  },
  {
        description:'“Fantastic service! Great website! The website was very professional. I would highly recommend. After initial payment, everything was completed within a week.”',
        name:'Lisa White',
        title:'Advanced website by Wix Partner Sara Michelle Design',
        src:'https://static.wixstatic.com/media/0784b1_40ae29cb22e246f9bf461ef503d96dfa~mv2.png/v1/fill/w_856,h_494,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2img.png',
  },
  {
        description:'“Galaxy is the best. They were super punctual, communicated very well … I recommend if you need some work done these are definitely the guys to do it, the site they made for me is outstanding.”',
        name:'Isaiah Christopher Thomas',
        title:'eCommerce Website by Wix Partner Galaxy Visual Media',
        src:'https://static.wixstatic.com/media/0784b1_91624e102c9d405c851eb43115f58f71~mv2.png/v1/fill/w_854,h_492,al_c,q_90,enc_auto/zay.png',
  },
  {
        description:'“I loved working with Dave and Bethany. They were great listeners and communicated with me regularly throughout the process. It was a real collaboration and I could not be happier with the final product.”',
        name:'Rosanna Maria Salcedo',
        title:'Website redesign by Wix Partner Let’s Design Your Site',
        src:'https://static.wixstatic.com/media/0784b1_b437489b536b4228a23d2533366e4386~mv2.png/v1/fill/w_856,h_494,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1img%20(1).png',
},
{
        description:'“Fantastic service! Great website! The website was very professional. I would highly recommend. After initial payment, everything was completed within a week.”',
        name:'Lisa White',
        title:'Advanced website by Wix Partner Sara Michelle Design',
        src:'https://static.wixstatic.com/media/0784b1_40ae29cb22e246f9bf461ef503d96dfa~mv2.png/v1/fill/w_856,h_494,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2img.png',
},
];


function App() {
  return (
    <div >
     <Navbar/>
     <Home/>

      {/* Card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-20 lg:pt-4 ">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}  
        />
      ))}
    </div>

    {/*Detail section */}

    <div className='pt-20 '>
      <div className='bg-black w-full md:h-[650px]  pt-20 pb-20'>
         <p className='text-white front-large text-6xl pl-32'>How it works</p>
          <div className='flex flex-col md:flex-row  '>
            {data.map((d)=>(
        
              <Detail
              k={d.i}
              title={d.title}
              description={d.description}
              />
            ))}
         </div>
      
      </div>
    </div>


    {/*Carousel section */}

    <div >
      <div className='w-full h-[1060px]'>
        <p className='text-6xl font-bold flex justify-center items-center pt-24 pl-20 '>  Wix Marketplace user reviews</p>
      <Carousel data={CarouselData}/>
      </div>
    
    </div>


    {/*Detail  section 2*/}
    <Detail2/>

    {/*Explore  section */}
    <Explore/>

    {/*footer section */}
    <Footer/>
    
    </div>
  );
}

export default App;
