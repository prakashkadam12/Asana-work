import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {GrLanguage} from "react-icons/gr";
import {IoIosOptions} from "react-icons/io";

import ResourcesPage from '../pages/ResourcesPage';
import ProductPage from '../pages/ProductPage';
import SolutionPage from '../pages/SolutionPage';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const [showResources, setShowResources] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false); // State for language list visibility
  const [showOptions, setShowOptions] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };
  
  const toggleResources = () => {
    setShowResources(!showResources);
    setShowProducts(false);
    setShowSolutions(false);
  };

  const toggleProducts = () => {
    setShowProducts(!showProducts);
    setShowResources(false);
    setShowSolutions(false);
  };

  const toggleSolutions = () => {
    setShowSolutions(!showSolutions);
    setShowResources(false);
    setShowProducts(false);
  };

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setActiveDropdown(null);
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/"> 
            <img src="data:image/png;base64,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" alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav className='flex flex-row gap-[180px] prakash'>
        <div>
        <ul className='text-richblack-100 flex gap-x-6'>
   
      
        {/* Resources Dropdown */}
        <div
          className='relative cursor-pointer hover:text-[#0D0E10]'
          onClick={() => handleDropdownClick('resources')}
        >
          Product
          {activeDropdown === 'resources' && (
            <div className='absolute top-full left-0 w-screen bg-white z-50 mt-[10px]'>
              <ProductPage />
            </div>
          )}
        </div>

              {/* Only show these three items when screen width is 320px or smaller */}
           
        {/* Products Dropdown */}
        <div
          className='relative cursor-pointer hover:text-[#0D0E10]'
          onClick={() => handleDropdownClick('products')}
        >
          Solutions
          {activeDropdown === 'products' && (
            <div className='absolute top-full left-0 w-screen bg-white z-50 mt-[10px]'>
              <SolutionPage />
            </div>
          )}
        </div>
    

        {/* Solutions Dropdown */}
        <div
          className='relative cursor-pointer hover:text-[#0D0E10]'
          onClick={() => handleDropdownClick('solutions')}
        >
          Resources
          {activeDropdown === 'solutions' && (
            <div className='absolute top-full left-0 w-screen bg-white z-50 mt-[10px] '>
              <ResourcesPage />
            </div>
          )}
        </div>
        <li className='hover:text-[#0D0E10]'>
            <Link to="/" >Enterprise</Link>
        </li>
        <li  className='hover:text-[#0D0E10]'>
            <Link to="/">Pricing</Link>
        </li>
          {/* Other menu items */}

        </ul>
        </div>

        <div>
        <ul className='text-richblack-100 flex gap-[15px] '>
        <div className='relative'>
        <button onClick={toggleLanguages} className='menu-button'>
          <GrLanguage size={20} />
        </button>
        {showLanguages && ( // Render the language list if showLanguages is true
          <div className='absolute bg-white mt-2 py-2 px-4 border border-gray-300 rounded shadow text-black'>
            {/* List of languages */}
            <ul className='space-y-2'>

              <li className='hover:bg-blue-400 hover:text-white'>
                <Link to='/'>Svenska</Link>
              </li>
             
              <li className='hover:bg-blue-400 hover:text-white' >
                <Link to='/'>Deutsch</Link>
              </li>
              <li className='hover:bg-blue-400 hover:text-white'>
                <Link to='/'>English</Link>
              </li>
              <li className='hover:bg-blue-400 hover:text-white'>
                <Link to='/'>Espansol</Link>
              </li>
              <li className='hover:bg-blue-400 hover:text-white'>
                <Link to='/'>Francais</Link>
              </li>
              <li className='hover:bg-blue-400 hover:text-white'>
                <Link to='/'>Italino</Link>
              </li>
              <li className='hover:bg-blue-400 hover:text-white'>
                <Link to='/'>Nederlands</Link>
              </li>
              {/* Add more languages as needed */}
            </ul>
          </div>
        )}
      </div>
                <li>
                <div class="w-0.5 h-6 bg-black"></div>
                </li>
                <li  className='hover:text-[#0D0E10]'>
                    <Link to="/">Contact Sales</Link>
                </li>
          {/* Other menu items */}
        </ul>
        </div>
      
      </nav>

    
     

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Get Started
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

          {showResources && (
        <div className="h-[33vh] w-full bg-gray-200">
          {/* Content for Resources section */}
          <h1>Prakash kadam</h1>
        </div>
      )}
      {showProducts && (
        <div className="h-[33vh] w-full bg-gray-200">
          {/* Content for Products section */}
        </div>
      )}
      {showSolutions && (
        <div className="h-[33vh] w-full bg-gray-200">
          {/* Content for Solutions section */}
        </div>
      )}
     
      
    </div>
  )
}

export default Navbar;
