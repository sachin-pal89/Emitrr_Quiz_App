import React from 'react'
import LangPalIcon from "../../assets/images/LangPalIcon.jpeg"
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className='p-10 bg-white-800'>
            <div className='mx-auto px-2 flex flex-row justify-between'>
                <div className='pl-10 flex flex-row'>
                  <img className='w-11 h-11 m-1' src={LangPalIcon} alt="LangPal" />
                  <h1 className='text-[25px] px-3 py-1 font-semibold'>LanguagePal</h1>
                </div>
                <div className='flex flex-row justify-end'>
                  <div className='flex-1 flex flex-row justify-end'>
                      <Link className='mr-20 pt-3 text-[20px] font-semibold cursor-pointer' to='/about'>About</Link>
                      <Link className='mr-10 pt-3 text-[20px] font-semibold cursor-pointer' to='/contact'>Contact Us</Link>
                  </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar