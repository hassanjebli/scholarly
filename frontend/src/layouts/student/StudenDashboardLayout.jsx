import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';
import { LOGIN_ROUTE } from '../../router';
import { axiosClient } from '../../api/axios';

const StudenDashboardLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!window.localStorage.getItem('ACCESS_TOKEN')) {
      navigate(LOGIN_ROUTE);
    }

    axiosClient
      .get('/user')
      .then(({ data }) => setUser(data))
      .catch((error) => console.log(error));
  }, []);

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
                to="/logout"
                className="text-gray-700 hover:text-blue-800 transition duration-200"
              >
                Logout
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
        <div class="relative overflow-x-auto mb-4">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Created at
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.id}
                </th>
                <td class="px-6 py-4">{user.name}</td>
                <td class="px-6 py-4">{user.email}</td>
                <td class="px-6 py-4">{user.created_at}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};

export default StudenDashboardLayout;
