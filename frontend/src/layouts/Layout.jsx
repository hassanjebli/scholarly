import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Layout = () => {
  return (
    <>
      <header className="bg-gray-100 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Scholarly Logo with Book */}
            <Link to={'/'}>
              <Logo />
            </Link>

            {/* All Navigation Items Together */}
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-800 transition duration-200"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-800 transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition duration-200"
              >
                Register
              </Link>

              {/* Dark Mode Toggle Button (Dummy) */}
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
