// AllRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../componenets/Home';
import { Users } from '../componenets/User';
import { AdminDashBoard } from '../componenets/AdminDashBoard';


export const AllRoutes = ({ Current_user }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/admin/*"
        element={Current_user === 'admin' ? <AdminDashBoard /> : <div>You are not authorized</div>}
      />
      <Route path="/user" element={<Users Current_user={Current_user} />} />
    </Routes>
  );
};
