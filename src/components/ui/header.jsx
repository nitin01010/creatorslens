import { useNavigate } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri"; // Import the account icon
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, isLoading, logout } = useAuth0();
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const ListArray = [
    { title: 'Home', path: '/' },
    { title: 'Blog', path: '/blogs' },
    ...(isAuthenticated ? [] : [
      { title: 'Signup', path: '/signup' },
      { title: 'Login', path: '/login' }
    ]),
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
      <div className="flex relative justify-between md:justify-around items-center shadow-md bg-white h-[75px]">
        <h1 className="text-[#FF914D] px-5 md:px-0 font-bold text-2xl md:text-2xl">
          <a href='/'>CreatorsLens<small>.com</small></a>
        </h1>

        <ul className="hidden lg:flex text-balance font-normal md:text-xl gap-10">
          { ListArray.map((item, indx) => (
            <li className='cursor-pointer hover:text-[#FF914D]' key={ indx } onClick={ () => navigate(item.path) }>
              { item.title }
            </li>
          )) }
          { isAuthenticated && (
            <>
              <li className='cursor-pointer hover:text-[#FF914D]' onClick={ () => navigate('/dashboard') }>
                Dashboard
              </li>
              <li className='cursor-pointer hover:text-[#FF914D]' onClick={ () => logout({ returnTo: window.location.origin }) }>
                Logout
              </li>
              <li className='cursor-pointer hover:text-[#FF914D]' onClick={ () => navigate('/profile') }>
                <RiAccountCircleLine size={ 24 } /> {/* Account icon */ }
              </li>

            </>
          ) }
        </ul>

        { toggle
          ? <IoMdClose size={ 25 } onClick={ () => setToggle(!toggle) } className='flex mr-5 lg:hidden' />
          : <CgMenuRight size={ 25 } onClick={ () => setToggle(!toggle) } className='flex mr-5 lg:hidden' />
        }
      </div>

      { toggle && (
        <div className={ `bg-[#f2f2f2] z-50 p-1 h-[610px] w-full lg:hidden fixed top-18 right-0 transform transition-transform duration-500 ease-out` }>
          <ul className="flex flex-col font-normal md:text-xl gap-2">
            { ListArray.map((item, indx) => (
              <li className='text-lg py-2 px-3 cursor-pointer hover:text-[#FF914D]' key={ indx } onClick={ () => { setToggle(false); navigate(item.path); } }>
                { item.title }
              </li>
            )) }
            { isAuthenticated && (
              <>
                <li className='text-lg py-2 px-3 cursor-pointer hover:text-[#FF914D]' onClick={ () => { setToggle(false); navigate('/dashboard'); } }>
                  Dashboard
                </li>
                <li className='text-lg py-2 px-3 cursor-pointer hover:text-[#FF914D]' onClick={ () => { setToggle(false); logout({ returnTo: window.location.origin }); } }>
                  Logout
                </li>
                <li className='text-lg py-2 px-3 cursor-pointer hover:text-[#FF914D]' onClick={ () => { setToggle(false); navigate('/profile'); } }>
                  <RiAccountCircleLine size={ 24 } /> {/* Account icon */ }
                </li>
              </>
            ) }
          </ul>
        </div>
      ) }
    </>
  );
};

export default Header;
