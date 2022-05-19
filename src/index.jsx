import React, { useState } from "react";

import ReactDOM from 'react-dom';
import TheHelmet from './Features/Theme/TheHelmet/TheHelmet';
import App from './App';
import ThemeContextProvider from './Features/Context/ThemeContext';
import BtnToggle from './Features/BtnToggle';




const Index = () => {


  return (
<div>
    <ThemeContextProvider>
      <BtnToggle/>
      <TheHelmet/>
      <App/>
      </ThemeContextProvider>
    </div>
  );
    
   
    
    };
  ReactDOM.render(<Index />, document.getElementById('root'));