import React, { useState } from 'react'
import LangPalIcon from '../../assets/images/LangPalIcon.jpeg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [fullname, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const checkUser = () => {
    alert(`SignUp Checked for ${fullname} with ${username} with ${password}`);
  }

  const handleToogleVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <div className='h-scrren w-screen'>
        <div className='mx-20 my-16 px-20 py-20 flex flex-col justify-center items-center'>
          <img src={LangPalIcon} alt="Logo" className='w-11 h-11'/>
          <div className='flex flex-col mt-3'>
            <div className='flex flex-col px-5 py-5'>
              <span className='my-1 px-1 text-sm text-gray-600'>Fullname</span>
              <input placeholder='Full Name' 
                  type="text" 
                  className='text-md block px-3 py-2 
                        border-2 rounded-lg w-full  
                        bg-white border-gray-300 placeholder-gray-600 shadow-md
                        focus:placeholder-gray-500 focus:bg-white focus:border-gray-600
                        focus:outline-none'
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                        />
            </div>
            <div className='flex flex-col px-5 pb-5'>
              <span className='my-1 px-1 text-sm text-gray-600'>Username</span>
              <input placeholder='Username' 
                  type="text" 
                  className='text-md block px-3 py-2 
                        border-2 rounded-lg w-full  
                        bg-white border-gray-300 placeholder-gray-600 shadow-md
                        focus:placeholder-gray-500 focus:bg-white focus:border-gray-600
                        focus:outline-none'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                        />
            </div>
            <div className='flex flex-col px-5'>
              <span className='my-1 px-1 text-sm text-gray-600'>Password</span>
              <div className='relative'>
                <input placeholder='Password' 
                  type={showPassword ? 'text' : 'password'} 
                  className='text-md block px-3 py-2 pr-10
                        border-2 rounded-lg w-full  
                        bg-white border-gray-300 placeholder-gray-600 shadow-md
                        focus:placeholder-gray-500 focus:bg-white focus:border-gray-600
                        focus:outline-none'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                        />
                <div
                  className='absolute top-2 right-3 cursor-pointer'
                  onClick={handleToogleVisibility}
                >
                    { showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
              </div>
            </div>
            <div className='flex flex-col px-5 pt-3'>
              <span className='my-1 px-2 text-sm text-gray-600'>Language to learn</span>
              <select name="languages" id="languages"
                    className='mt-1 text-center shadow-lg border-2 bg-gray-50 border-6
                        border-gray-800 text-gray-900 text-sm rounded-lg
                        py-2 px-3 mx-2 focus:ring-blue-500 focus:border-blue-500 block'
                >
                    <option value="Python">Python</option>
                    <option value="CPP">C++</option>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
              </select>
            </div>
            <Link
              className='bg-[#1F51FF] hover:bg-[#0047AB] text-center
                hover:drop-shadow-lg text-white font-bold mt-6 mx-5 py-2
                rounded-lg'
              onClick={checkUser}
            >
                SignUp
            </Link>
          </div>
          <div className='mt-4'>
            <p>Already have a account ? 
            <Link to="/login" className='cursor-pointer text-blue-500 hover:text-blue-700'> Login</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp