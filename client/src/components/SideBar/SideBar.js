import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import QuizIcon from '@mui/icons-material/Quiz';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';

const SideBar = ({props}) => {

  return (
    <>
      <div className='w-[15%] h-screen bg-blue-800 rounded-sm
            text-white shadow-[4px_0_rgba(0,0,0,0.1)] transform -translate-z-80
      '>
        <div className='mt-36 mx-10 h-[60%] text-start flex flex-col gap-20 content-between'>
          <div 
            className='flex flex-row mt-10 cursor-pointer'
            onClick={() => props('profile')}
          >
              <PersonIcon className='mx-2'/>
              <p className='text-[17px] font-semibold tracking-wide'> Profile</p>
          </div>
          <div 
            className='flex flex-row cursor-pointer'
            onClick={() => props('quiz')}
          >
              <QuizIcon className='mx-2'/>
              <p className='text-[17px] font-semibold tracking-wide'>Quiz</p>
          </div>
          <div 
            className='flex flex-row cursor-pointer'
            onClick={() => props('leaderboard')}
          >
              <LeaderboardIcon className='mx-2'/>
              <p className='text-[17px] font-semibold tracking-wide'>LeaderBoard</p>
          </div>
          <div 
            className='flex flex-row cursor-pointer'
            onClick={() => props('settings')}
          >
              <SettingsIcon className='mx-2'/>
              <p className='text-[17px] font-semibold tracking-wide'>Settings</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar