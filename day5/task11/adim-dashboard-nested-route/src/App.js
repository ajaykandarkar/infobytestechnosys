// App.js
import React from 'react';
import { Navbar } from './componenets/Navbar';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  const Users = {
    Registered: 'registered',
    Public: 'public',
    Admin: 'admin',
  };

  const Current_user = Users.Public; 
  return (
    <>
      <Navbar Current_user={Current_user} />
      <AllRoutes Current_user={Current_user} />
    </>
  );
}

export default App;
