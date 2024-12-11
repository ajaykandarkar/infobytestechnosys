import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Users } from './User';
import { Settings } from './Setting';
export const AdminDashBoard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Admin Dashboard</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <Link
              to="users"
              className="list-group-item list-group-item-action"
            >
              Users
            </Link>
            <Link
              to="settings"
              className="list-group-item list-group-item-action"
            >
              Settings
            </Link>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <Routes>
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
