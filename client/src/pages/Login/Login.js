import React, { useState } from 'react'
import LangPalIcon from '../../assets/images/LangPalIcon.jpeg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = ({ handleUser }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const checkUser = async () => {

    try {

      const response = await axios.post('http://localhost:5000/login', {
        username: username,
        password: password,
      })

      handleUser(response.data)
      navigate("/dashboard")

    } catch (error) {

      console.error('Error while making the API request:', error);
    }

  }
  
  const handlePassword = (data) => {
    setPassword(data)
  }

  const handleToogleVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <div className='h-scrren w-screen'>
        <div className='mx-20 my-36 px-20 py-20 flex flex-col justify-center items-center'>
          <img src={LangPalIcon} alt="Logo" className='w-11 h-11' />
          <div className='flex flex-col mt-3'>
            <div className='flex flex-col px-5 py-5'>
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
                  onChange={(e) => handlePassword(e.target.value)}
                />
                <div
                  className='absolute top-2 right-3 cursor-pointer'
                  onClick={handleToogleVisibility}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
              </div>
            </div>
            <Link
              to='#'
              className='bg-[#1F51FF] hover:bg-[#0047AB] text-center
                hover:drop-shadow-lg text-white font-bold mt-6 mx-5 py-2
                rounded-lg'
              onClick={(e) => {
                e.preventDefault();
                checkUser();
              }}
            >
              Login
            </Link>
          </div>
          <div className='mt-4'>
            <p>Don't have a account ?
              <Link to="/signup" className='cursor-pointer text-blue-500 hover:text-blue-700'> SignUp</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login