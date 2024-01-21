import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Profile from '../../components/Profile/Profile'
import Quiz from '../../components/Quiz/Quiz'
import Leaderboard from '../../components/Leaderboard/Leaderboard'
import Settings from '../../components/Settings/Settings'
import axios from 'axios'

const Dashboard = ({ user, handleQuizData, quiz }) => {
  
  const [section, setSection] = useState('profile');

  const setSectionToShow = (newSection) => {
    setSection(newSection);
  }

  const getQuizData = async () => {

    const response = await axios.get('http://localhost:5000/lang/allQuestions');

    handleQuizData(response.data);
  }

  let componentToRender;

    switch(section) {
      case 'profile':
        componentToRender = <Profile user={user} quiz={quiz}/>;
        break;
      
      case 'quiz':
        componentToRender = <Quiz />;
        break;
      
      case 'leaderboard':
        componentToRender = <Leaderboard quiz={quiz} user={user}/>;
        break;
      
      case 'settings':
        componentToRender = <Settings user={user}/>;
        break;
      
      default:
        componentToRender = <Profile />;
        break;
    }


  useEffect(() => {
    
    getQuizData();

  }, [])

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