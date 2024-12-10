// AdminDashboard.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Users } from './User';
import { Settings } from './Setting';

export const AdminDashBoard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="users">Users</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="users" element={<Users/>} />
        <Route path="settings" element={<Settings/>} />
      </Routes>
    </div>
  );
};
