import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext("null");

function App() {
  const [ theme, setTheme ] = useState("light");

  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <div className="mainApp" id={theme}>
          <Navbar title='Text Modifier' navItem1='Home' navItem2='About us' navItem3='Contact us' />
          <div class="form-check form-switch mx-3">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggleTheme} checked={theme === "dark"} />
            <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          <TextForm heading ="Paste Your Texts Here" details ="Enter your texts here which you want to modify" />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
