import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="bg-gray-100 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Scholarly Logo with Book */}
            <Link to={'/'}>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-10 h-10 text-blue-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4V6h16v12z"></path>
                  <path d="M9 8h2v8H9zm4 0h2v8h-2z"></path>
                  <path d="M4 6v12h16V6H4zm1 11V7h14v10H5z"></path>
                </svg>
                <span className="text-xl font-serif font-bold text-gray-800">
                  Scholarly
                </span>
              </div>
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
                to="/users"
                className="text-gray-700 hover:text-blue-800 transition duration-200"
              >
                Users
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
