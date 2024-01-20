import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <div className='mx-10 mt-20 py-6 flex flex-col items-center'>
        <p className='text-[30px] font-bold text-[#1F51FF]'>Let's Connect!</p>
        <div className='my-3'>
          <a href="https://www.linkedin.com/in/sachin-pal89/" target='_blank' rel="noreferrer" className='px-2'><LinkedInIcon sx={{fontSize: 30}}/></a>
          <a href="https://twitter.com/The_Sachin_Pal" target='_blank' rel="noreferrer" className='px-2'><XIcon sx={{fontSize: 30}}/></a>
          <a href="https://www.instagram.com/sachinpal8040/" target='_blank' rel="noreferrer" className='px-2'><InstagramIcon sx={{fontSize: 30}}/></a>
        </div>
        <p>&copy;2024, By Sachin Pal</p>
      </div>
    </>
  )
}

export default Footer