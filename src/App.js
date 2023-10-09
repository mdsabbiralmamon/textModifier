import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext("null");

function App() {
  const [ theme, setTheme ] = useState("dark");

  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <div className="mainApp" id={theme}>
          <Navbar title='Text Modifier' navItem1='Home' navItem2='About us' navItem3='Contact us' />
          <TextForm heading ="Paste Your Texts Here" details ="Enter your texts here which you want to modify" />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
