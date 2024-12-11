import React from 'react';
import './App.css';
import { BreadCrum } from './components/BreadCrum';
import { AllRoute } from './components/routes/AllRoute';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();


  const showBreadCrum =
    location.pathname.startsWith("/products") || location.pathname.startsWith("/products/");

  return (
    <>
      {showBreadCrum && <BreadCrum />}
      <AllRoute />
    </>
  );
}

export default App;
