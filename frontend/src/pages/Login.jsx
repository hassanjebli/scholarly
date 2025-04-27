import React from 'react';
import StudentLogin from '../components/student/StudentLogin';

const Login = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        Login Student
      </h2>
      <StudentLogin />
    </>
  );
};

export default Login;
