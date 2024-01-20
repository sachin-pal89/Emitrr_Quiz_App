import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Profile from '../../components/Profile/Profile'
import Quiz from '../../components/Quiz/Quiz'
import Leaderboard from '../../components/Leaderboard/Leaderboard'
import Settings from '../../components/Settings/Settings'

const Dashboard = () => {
  
  const [section, setSection] = useState('profile');

  const setSectionToShow = (newSection) => {
    setSection(newSection);
  }

  let componentToRender;

    switch(section) {
      case 'profile':
        componentToRender = <Profile />;
        break;
      
      case 'quiz':
        componentToRender = <Quiz />;
        break;
      
      case 'leaderboard':
        componentToRender = <Leaderboard />;
        break;
      
      case 'settings':
        componentToRender = <Settings />;
        break;
    }

  return (
    <>
      <div className='flex flex-row'>
        <SideBar className='flex-2' props={setSectionToShow}/>
        <div className='flex-1'>
            {componentToRender}
        </div>
      </div>
    </>
  )
}

export default Dashboard