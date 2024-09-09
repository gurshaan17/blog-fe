import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { isLoggedIn, getUserEmail, logout } from '../utils/auth';

const DropdownMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative">
        {React.cloneElement(children[0], {
          onClick: () => setIsOpen(!isOpen),
        })}
        {isOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">{children[1]}</div>}
      </div>
    );
  };
  
  const Button = ({ variant, size, className, children, onClick }) => (
    <button
      className={`${variant === 'outline' ? 'border border-gray-300' : ''} ${
        size === 'sm' ? 'px-2 py-1 text-sm' : 'px-4 py-2'
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
  
  const Avatar = () => (
      <div className='text-lg'>
          <CgProfile />
      </div>
  );


  const BookIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
  

const HeaderMain = () => { 
    const [loggedIn, setLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        setLoggedIn(isLoggedIn());
        setUserEmail(getUserEmail());
    }, []);

    return (
        <header className="sticky top-0 z-40 border-b bg-white">
            <div className="container flex h-14 items-center justify-between px-4 md:px-6">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <BookIcon className="h-6 w-6" />
                <span className="hidden sm:inline">Blog</span>
              </Link>
              <nav className="hidden gap-4 sm:flex">
                <Link to="/" className="text-sm font-medium hover:underline hover:underline-offset-4">
                  Blog
                </Link>
                <Link to="/dashboard" className="text-sm font-medium hover:underline hover:underline-offset-4">
                  Dashboard
                </Link>
              </nav>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar />
                  </Button>
                  <div>
                    {loggedIn ? (
                      <>
                        <div className="block px-4 py-2 text-sm font-semibold">{userEmail}</div>
                        <Link to="/dashboard" className="block px-4 py-2 text-sm">
                          Dashboard
                        </Link>
                        <hr className="my-1" />
                        <button onClick={logout} className="block px-4 py-2 text-sm">
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className="block px-4 py-2 text-sm">
                          Login
                        </Link>
                        <Link to="/signup" className="block px-4 py-2 text-sm">
                          Signup
                        </Link>
                      </>
                    )}
                  </div>
                </DropdownMenu>
                {loggedIn && (
                  <Link to='/create' className="border border-gray-300 px-2 py-1 text-sm">
                    Write
                  </Link>
                )}
              </div>
            </div>
          </header>
    );
}

export default HeaderMain;