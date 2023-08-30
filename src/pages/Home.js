import React from 'react';
import ImageCarousel from '../components/ImageCarousel';


const Home = ({isLoggedIn}) => {
  return (
    <div className='flex flex-row space-x-20  justify-center  items-center text-black text-3xl w-full h-full space-y-10 ml-7'>
    
    {/*Left Part Of Home Page */}
    <div className='flex flex-col space-y-12'>
    <h1>The best platform for <br/> cross-functional work</h1>
    <div class="w-12 h-1 bg-black"></div>
    <p>Want to drive efficiency across your <br/> organization? Asana is flexible and easy for all <br/> teams to use, so you can deliver quality work <br/>together, faster.</p>
    
    <div className='flex space-x-4'>
    <button className="bg-black border border-black hover:bg-pink-500 text-white  py-2 px-4  transition duration-300">
  Get Started
</button>
    <button className="bg-white border border-black hover:bg-pink-500 text-black  py-2 px-4  transition duration-300">
    See how it works
</button>

    </div>

    </div>
  
   {/*Right Part Of Home Page */}

    <div className="flex justify-center items-center h-screen ">
      <ImageCarousel />
    </div>


    </div>
  )
}

export default Home
