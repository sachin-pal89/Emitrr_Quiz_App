import React from 'react'
import LangPalIcon from "../../assets/images/LangPalIcon.jpeg"
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
            </div>
        </nav>
    </>
  )
}

export default NavBar