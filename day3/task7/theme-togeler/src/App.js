import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './componenets/Button';
import { Form } from './componenets/Form';
import { ThemeContext } from './hooks/themeContext';

function App() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme); 
  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(()=>{
    localStorage.setItem('theme', theme);
  },[theme])

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`app-container ${theme}-theme`}>
          <Button
            lightTheme={<i class="fa-solid fa-sun"></i>}
            darkTheme={<i class="fa-regular fa-moon"></i>}
            OnClick={handleClick}
            className={`m-2 p-2`}
          />
          <Form />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
