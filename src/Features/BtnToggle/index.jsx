import React, {useContext} from 'react'
import './BtnToggle.css'
import { ThemeContext } from '../Context/ThemeContext'


const BtnToggle = () => {
  const {toggleTheme, theme} = useContext
  (ThemeContext)

  return (
    <div onClick={toggleTheme} className={theme ? "btn-toggle goDark" : "btn-toggle goLight"}>
      {theme ? "☀️" : "🌙"}
    </div>
  )
}

export default BtnToggle;
