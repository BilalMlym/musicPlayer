import React from 'react'
import {Logo} from "../assets/img/index" 
import {NavLink} from "react-router-dom"

import { isActiveStyles , isNotActiveStyles} from '../utils/styles'


const Header = () => {
  return (
    <header className="flex items-center w-full p-4 md:py-2 md:px-6">
      <NavLink to = {"./"}>
      <img src={Logo} alt="logo" className="w-16" />
      </NavLink>

      <ul  className="flex items-center justify-center ml-7">
        <li className="mx-5 text-lg"><NavLink to={"./Home"} className ={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles}>Home</NavLink></li>
        <li className="mx-5 text-lg"><NavLink to={"./Music"} className ={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles}>Music</NavLink></li>
        <li className="mx-5 text-lg"><NavLink to={"./Premium"} className ={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles}>Premium</NavLink></li>
        <li className="mx-5 text-lg"><NavLink to={"./ContactUs"} className ={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles}>Contact Us</NavLink></li>
      </ul>
    </header>
  )
}

export default Header