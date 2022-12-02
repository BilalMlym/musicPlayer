import React from 'react'
import {Logo , Avatar} from "../assets/img/index" 
import {NavLink} from "react-router-dom"
import {FaCrown } from "react-icons/fa"
import { useStateValue } from '../Context/stateProvider'

import { isActiveStyles , isNotActiveStyles} from '../utils/styles'


const Header = () => {
  const [{user}, dispatch] = useStateValue()
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
      <div className="flex items-center ml-auto cursor-pointer gap-2 relative">
        <img src={Avatar} alt="UserPic" className='w-12 min-w-[44px] object-cover rounded-full shadow-lg'/>
        <div className='flex flex-col'>
          <p className='text-textColor text-lg hover:text-headingColor font-semibold'> {user?.user?.name}</p>
          <p className='flex items-center gap-2 text-xs text-gray-500 font-normal'>Premium Memmber <FaCrown className='text-sm -ml-1 text-yellow-500' /></p>
        </div>
      </div>
    </header>
  )
}

export default Header