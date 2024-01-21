import React, { useState } from 'react'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { NotificationManager } from 'react-notifications';

const Settings = () => {
  
  const [passwordInput, setPasswordInput] = useState(false);
  const [changepassword, setChangePassword] = useState('');
  
  const handleChangePassword = (val) => {
    setChangePassword(val);
  }

  const handlePasswordInput = () => {
    setPasswordInput(!passwordInput);
  }

  const resetCourse = () => {
    NotificationManager.success('Course Reset Done', 'Success', 2000);
  }

  const changePasswordNotify = () => {
    NotificationManager.success('Password changed', 'Success', 2000);
  }
  

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <NotificationContainer/>
        <div className='w-[80%] h-[80%] flex justify-center items-center'>
          <div className='h-[80%] p-5 flex flex-col justify-center'>
            <div className='flex flex-row items-center cursor-pointer'
              onClick={resetCourse}
            >
              <RestartAltIcon sx={{fontSize: 28}}/>
              <p className='text-[20px] font-bold p-4'>Reset Courses</p>
            </div>
            <div className='flex flex-row items-center cursor-pointer'
              onClick={() => handlePasswordInput()}
            >
              <ManageAccountsIcon sx={{fontSize: 28}}/>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings