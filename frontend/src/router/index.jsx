import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Users from '../pages/Users';
import NotFound from '../pages/NotFound';
import Layout from '../layouts/Layout';

export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';
export const STUDENT_DASHBOARD_ROUTE = '/student/dashboard';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: LOGIN_ROUTE,
        element: <Login />,
      },
      {
        path: REGISTER_ROUTE,
        element: <Register />,
      },
      {
        path: STUDENT_DASHBOARD_ROUTE,
        element: <h1>student dashboard</h1>,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
