import React, { useEffect, useState } from 'react'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { NotificationManager } from 'react-notifications';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const Settings = ({ user }) => {

  const [passwordInput, setPasswordInput] = useState(false);
  const [resetCourseInput, setResetCourseInput] = useState(false);
  const [changepassword, setChangePassword] = useState('');
  const [lang, setLang] = useState('Python')
  const navigate = useNavigate();

  const handleChangePassword = (val) => {
    setChangePassword(val);
  }

  const handleLang = (data) => {
    setLang(data);
  }

  const handlePasswordInput = () => {
    setPasswordInput(!passwordInput);
  }

  const handleResetCourseInput = () => {
    setResetCourseInput(!resetCourseInput);
  }

  const resetCourse = async () => {

    try {
      
      const resetData = {
        username: user.username,
        lang_name: lang,
      }

      const response = await axios.post('http://localhost:5000/resetCourse', resetData)
      
      NotificationManager.success('Course Reset Done', 'Success', 2000);

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      
      NotificationManager.error(error.message || 'An error occurred', 'Error', 2000);
    }
  }

  const changePasswordNotify = async () => {

    try {
      
      const newPasswordData = {
        username: user.username,
        newPassword: changepassword,
      }

      const response = await axios.post('http://localhost:5000/changePassword', newPasswordData)
      
      NotificationManager.success('Password changed', 'Success', 2000);

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      
      NotificationManager.error(error.message || 'An error occurred', 'Error', 2000);
    }
  }

  const initialLang = () => {
    setLang(user.lang[0].lang_name)
  }

  const handleLogout = () => {
    // Clear user and quiz data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('quiz');

    // Navigate to the login page
    navigate('/login');
  };

  useEffect(() => {
    
    initialLang();

  }, [])

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <NotificationContainer />
        <div className='w-[80%] h-[80%] flex justify-center items-center'>
          <div className='h-[80%] p-5 flex flex-col justify-center'>
            <div className='flex flex-row items-center cursor-pointer'
            >
              <RestartAltIcon sx={{ fontSize: 28 }} />
              <p className='text-[20px] font-bold p-4'
                  onClick={handleResetCourseInput}
              >
                Reset Courses
              </p>
            </div>
            {resetCourseInput ? (
              <div className='flex flex-row p-4'>
                <select name="language" id="language"
                  className='w-full mr-2 py-1 text-center border-2 rounded-lg'
                  onChange={(e) => handleLang(e.target.value)}
                >
                  {user.lang.map((langItem) => (
                    <option key={langItem.lang_name}
                      value={langItem.lang_name}
                      className='text-sm p-1 text-blue-500 font-bold tracking-wide mt-4'
                    >
                      {langItem.lang_name}
                    </option>
                  ))}
                </select>
                <button className='bg-blue-800 text-white p-2 rounded-lg hover:shadow-md'
                  onClick={() => {
                    handleResetCourseInput();
                    resetCourse();
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
              </div>
            )}
            <div className='flex flex-row items-center cursor-pointer'
              onClick={() => handlePasswordInput()}
            >
              <ManageAccountsIcon sx={{ fontSize: 28 }} />
              <p className='text-[20px] font-bold p-4'>Change Password</p>
            </div>
            {passwordInput ? (
              <div className='flex flex-row p-4'>
                <input type="text" className='px-2 border-2 mr-2 border-gray-400 rounded-lg shadow-lg'
                  value={changepassword}
                  onChange={(e) => handleChangePassword(e.target.value)}
                />
                <button className='bg-blue-800 text-white p-2 rounded-lg hover:shadow-md'
                  onClick={() => {
                    changePasswordNotify();
                    handlePasswordInput();
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
              </div>
            )}
            <div className='flex flex-row items-center cursor-pointer'
              onClick={handleLogout}
            >
              <LogoutIcon sx={{ fontSize: 28 }} />
              <p className='text-[20px] font-bold p-4'>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings