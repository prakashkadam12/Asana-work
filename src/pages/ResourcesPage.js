import React from 'react';

const ResourcesPage = () => {
  return (
    <div className='flex flex-row space-x-5 mx-auto'>
     <div className='flex flex-col'>
       <h1 className='font-size-[14px] font-weight-[500] '>Work Managment Resources</h1>
       <p >Discover best Practices, watch <br/> webinars , get insights</p>

       <br/>
       <h1>Asana Guide</h1>
       <p>Discover best Practices, watch <br/> webinars , get insights</p>
    <br/>
    <h1>Asana Academy</h1>
       <p>Signup for interactive cources <br/> and webinars to learn Asana</p>
       <br/>
       <h1>Blog</h1>
       <p>Discover the latest Asana<br/> Product and company news</p>
     </div>
     
     <div className='flex flex-col'>
     <h1>Events</h1>
       <p>Find Out about upcoming events <br/> near you</p>
       <br/>
       <h1>Community Programs</h1>
       <p>Connect with and learn from <br/> asana customers around the<br/>world</p>
       <br/>
       <h1>Support</h1>
       <p>Need help ? contact the Asana <br/> support team</p>
       <br/>
       <h1>Partners</h1>
       <p>Learn more about your Partner Program</p>

     </div>
    
     <div className='flex flex-col space-y-3'>
     <h1>FEATURED READS</h1>
     <div class="h-0.5 w-16 bg-gray-800"></div>

     <div className='flex flex-row'>
        <div>
        <img src='https://assets.asana.biz/m/3c783c71ef817d3e/original/WEBINAR-PNG-24AI-ON_DEMAND-800x512-v2.png' className='h-[150px] w-[180px]'></img>
        </div>
        <div className='flex flex-col'>
        <h1>DEMO</h1>
        <h2>Meet Asana inteligence : <br/> AI joined team</h2>
     <p>Watch Now</p>
        </div>
     </div>
     
     <div className='flex flex-row'>
        <div>
        <img src='https://assets.asana.biz/m/64d1a4e336c4ad0c/original/EMIM23_BLOG_CONCEPTUAL_HERO_803x533_EN.png'className='h-[150px] w-[180px]'></img>
        </div>
        <div className='flex flex-col'>
        <h1>REPORT</h1>
        <h2>Drive emplooyee impact:New<br/> tools to empower resilient leadership</h2>
     <p>Read more</p>
        </div>
     </div>

     <div className='flex flex-row'>
        <div>
        <img src='https://assets.asana.biz/transform/f00a3f86-0802-42ae-a948-41d2936b99e8/web-aow24-nav-thumbnail_aow-cover' className='h-[150px] w-[180px]'></img>
        </div>
        <div className='flex flex-col'>
        <h1>REPORT</h1>
        <h2>The Anatomy of Work : Global<br/> Index 2023</h2>
     <p>Read more</p>
        </div>
     </div>

     </div>
    </div>
  );
};

export default ResourcesPage;
