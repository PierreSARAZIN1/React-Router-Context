import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import  { Helmet } from "react-helmet";

const TheHelmet = () => {
    
  const {theme} = useContext(ThemeContext);
    return (
      <Helmet>
        <style>{`body { background-color: ${theme ? '#16122e' : '#d0d5dd'}; color: ${theme ? '#ae33f2' : '#351757'}; transition: all 0.2s ease-in-out }`}</style>
        <style>{`a {color: ${theme ? '#226c93' : '#11445c'}; transition: all 0.2s ease-in-out; border : solid 2px; border-radius: 20px; padding: 8px; }`}</style>
        <style>{`a:hover {color: ${theme ? '#16122e' : '#d0d5dd'};background-color: ${theme ? '#226c93' : '#11445c'} }`}</style>
      </Helmet>
    );
  };
  
  export default TheHelmet;