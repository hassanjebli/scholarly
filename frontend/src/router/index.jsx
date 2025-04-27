import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Users from '../pages/Users';
import NotFound from '../pages/NotFound';
import Layout from '../layouts/Layout';
import GuestLayout from '../layouts/GuestLayout';
import StudenDashboardLayout from '../layouts/student/StudenDashboardLayout';
import StudentDashboard from '../components/student/StudentDashboard';

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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    element: <GuestLayout />,
    children: [
      {
        path: LOGIN_ROUTE,
        element: <Login />,
      },
      {
        path: REGISTER_ROUTE,
        element: <Register />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    element: <StudenDashboardLayout />,
    children: [
      {
        path: STUDENT_DASHBOARD_ROUTE,
        element: <StudentDashboard />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
