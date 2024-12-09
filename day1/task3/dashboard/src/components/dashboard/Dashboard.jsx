import React from "react";
import { ToDoList } from "./ToDoList";
import SalesChart from './SalesChart';
const Dashboard = () => {
  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sales Chart</h5>
             <SalesChart/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">To-Do List</h5>
              <ToDoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

