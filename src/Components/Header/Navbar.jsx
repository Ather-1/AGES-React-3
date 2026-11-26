import Logo from '../../../src/assets/AgesLogo.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Menu from './Menu.jsx'
import { FiMenu, FiX } from "react-icons/fi"
import { FaArrowRight } from "react-icons/fa6";




import {Btn} from '../Typography.jsx'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const NavigateHome = useNavigate();
  const NavigateContact = useNavigate();
  const GoToHome = () => { 
    return (
      NavigateHome('/')
    )};

    const GoToContact = () => {
      return (
        NavigateContact('/contact')
      )
    }

  
  
  return (
    <header className='border-b border-gray-300 shadow-md bg-white'>
        <div className='Adjust flex items-center justify-between py-2'>

          <div>
            <img src={Logo} alt="Logo" onClick={GoToHome} className='h-11 md:h-12 lg:h-16  cursor-pointer'/>
          </div>

          <nav className='hidden md:flex items-center gap-6 text-sm md:text-md font-bold tracking-wider text-txtd'>
              <Menu />
          </nav>

          <div className='hidden lg:block'>
            <Btn to={GoToContact}>Plan Project</Btn>
          </div>

          <button onClick={() => setOpen(!open)} className='md:hidden text-2xl text-txtd'>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>


        {open && (
          <nav className='md:hidden bg-BackGround/95 fixed z-100 left-1/2 -translate-x-1/2 w-[90%] rounded-xl border border-gray-400 mt-4'>
            <div className='text-md font-semibold tracking-widest flex flex-col items-center justify-center  gap-4 py-16 text-Txtdark1'>
              <Menu />
              <Btn to={GoToContact}>Plan Project</Btn>
            </div>
          </nav>
        )}
    </header>
  )
}

export default Navbar