import { useNavigate } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri"; // Import the account icon
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { CiLock } from "react-icons/ci"; // Import the lock icon

const Header = () => {
  const { isAuthenticated, isLoading, logout, user } = useAuth0();
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  // Check if user has a token or is authenticated
  const hasToken = user && user.sub; // Example check for valid user token

  // List of items to display based on authentication status
  const ListArray = [
    ...(hasToken ? [] : [ // If the user does NOT have a token, show Home and Blog
      { title: 'Home', path: '/' },
      { title: 'Blog', path: '/blogs' }
    ]),
    ...(hasToken ? [ // If the user HAS a token, show Dashboard/Profile/Logout
      { title: 'Dashboard', path: '/dashboard' },
      { title: 'Profile', path: '/profile' },
      { title: 'Logout', path: '#', onClick: () => logout({ returnTo: window.location.origin }) },
    ] : []),
    ...(!hasToken ? [ // Show Signup and Login buttons when not authenticated
      { title: 'Signup', path: '/signup' },
      { title: 'Login', path: '/login' }
    ] : [])
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[75px] bg-white shadow-md">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex bg-[#0D0D0D] h-[75px] relative justify-between items-center px-3 md:px-10">
        <div className='flex text-white gap-28'>
          <h1 className="text-[#0075FF] px-5 font-bold text-2xl">
            <a href='/'>CreatorsLens</a>
          </h1>
          <ul className="hidden lg:flex text-balance font-normal md:text-xl gap-10">
            { ListArray.map((item, indx) => (
              <li
                className='cursor-pointer hover:text-[#0075FF]'
                key={ indx }
                onClick={ () => {
                  if (item.onClick) {
                    item.onClick();
                  } else {
                    navigate(item.path);
                  }
                } }
              >
                { item.title }
              </li>
            )) }
          </ul>
        </div>

        {/* Signup/Login buttons for larger screens */ }
        { !hasToken && (
          <div className='flex gap-3'>
            <div
              className='flex text-white border-[#FFFFFF] mr-4 justify-center items-center gap-3 font-bold w-[127px] h-[48px] rounded-[10px] border capitalize hidden lg:block cursor-pointer'
              onClick={ () => navigate('/signup') }
            >
              <CiLock size={ 20 } color='white' />
              <p>Signup</p>
            </div>
            <div
              className='flex text-white border-[#FFFFFF] mr-4 justify-center items-center gap-3 font-bold w-[127px] h-[48px] rounded-[10px] border capitalize hidden lg:block cursor-pointer'
              onClick={ () => navigate('/login') }
            >
              <CiLock size={ 20 } color='white' />
              <p>Login</p>
            </div>
          </div>
        ) }

        {/* Toggle button for mobile */ }
        { toggle
          ? <IoMdClose size={ 25 } color='white' onClick={ () => setToggle(!toggle) } className='flex mr-5 lg:hidden' />
          : <CgMenuRight size={ 25 } color='white' onClick={ () => setToggle(!toggle) } className='flex mr-5 lg:hidden' />
        }
      </div>

      {/* Mobile navigation */ }
      { toggle && (
        <div className="bg-black z-50 p-1 text-white w-full lg:hidden fixed top-18 right-0 transform transition-transform duration-500 ease-out">
          <ul className="flex flex-col font-normal md:text-xl gap-2">
            { ListArray.map((item, indx) => (
              <li
                className='text-lg py-2 px-3 cursor-pointer hover:text-[#0075FF]'
                key={ indx }
                onClick={ () => {
                  setToggle(false);
                  if (item.onClick) {
                    item.onClick();
                  } else {
                    navigate(item.path);
                  }
                } }
              >
                { item.title }
                { item.title === 'Profile' && <RiAccountCircleLine size={ 24 } /> } {/* Account icon */ }
              </li>
            )) }
          </ul>
        </div>
      ) }
    </>
  );
};

export default Header;
