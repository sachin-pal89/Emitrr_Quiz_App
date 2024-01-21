import React, { useEffect, useState } from 'react'
import PythonIcon from "../../assets/images/PythonIcon.png"
import CPPIcon from '../../assets/images/CPPIcon.png'
import JavaIcon from "../../assets/images/JavaIcon.png"
import JavaScriptIcon from "../../assets/images/JavaScriptIcon.png"
import { Progress } from "@material-tailwind/react";

const Profile = ({ user, quiz }) => {

  const [lang, setLang] = useState('');
  const [score, setScore] = useState('0/0');
  const [totalScore, setTotalScore] = useState(0);
  const [level, setLevel] = useState('Beginner');
  const [progress, setProgess] = useState(0);
  
  const ImagePath = {
    Python: PythonIcon,
    CPP: CPPIcon,
    Java: JavaIcon,
    JavaScript: JavaScriptIcon
  }


  const handleLang = (data) => {

    const langItem = JSON.parse(data);
    const newTotalScore = quiz.find((item) => item.lang_name === langItem.lang_name)?.total_score;
    const progressPercentage = langItem.curr_question_no * 2
    const userLevel = progressPercentage < 33 ? "Beginner" : ( progressPercentage < 66 ? "Intermediate" : "Advance");

    setLang(langItem.lang_name);
    setScore(langItem.score);
    setTotalScore(newTotalScore ? newTotalScore : 0);
    setProgess(progressPercentage);
    setLevel(userLevel)
  }
  
  const initialLang = () => {
    
    const totalScore = quiz.find((item) => item.lang_name === user.lang[0].lang_name)?.total_score;
    const progressPercentage = user.lang[0].curr_question_no * 2;
    const userLevel = progressPercentage < 33 ? "Beginner" : ( progressPercentage < 66 ? "Intermediate" : "Advance");

    setLang(user.lang[0].lang_name)
    setScore(user.lang[0].score)
    setTotalScore(totalScore ? totalScore : 0);
    setProgess(progressPercentage);
    setLevel(userLevel)
  }

  useEffect(() => {
    
    initialLang();

  }, [])

  return (
    <>
      <div className='w-full h-screen'>
        <div className='pt-25 pb-20 mx-40'>
          <div className='pt-40 pb-10 px-20 flex flex-col  text-center items-center'>
            <p className='text-[50px] font-semibold tracking-wide text-blue-800'>{user.fullname}</p>
            <p className='text-lg text-black font-semibold tracking-wide'>@{user.username}</p>
            <select name="language" id="language" 
                    className='w-[30%] mt-4 py-1 text-center border-2 rounded-lg'
                    onChange={(e) => handleLang(e.target.value)}
            >
              {user.lang.map((langItem) => (
                <option key={langItem.lang_name}
                        value={JSON.stringify(langItem)} 
                        className='text-sm p-1 text-blue-500 font-bold tracking-wide mt-4'
                >
                  {langItem.lang_name}
                </option>
              ))}
            </select>
          </div>
          <div className='p-4'>
            <h1 className='p-2 font-bold text-[20px]'>Progress</h1>
            <div className='w-full p-2'>
              <div className='transform -transalte-y-20 shadow-lg border-4
                    border-gray-100'>
                <div className='p-2 flex flex-row w-full'>
                  <div className='flex-1 text-center flex flex-col justify-center items-center'>
                    <p className='font-semibold'>Language</p>
                    <img src={ImagePath[lang]} alt="Python" className='w-24 h-24 p-3'/>
                  </div>
                  <div className='flex-1 text-center flex flex-col justify-center items-center'>
                    <p className='font-semibold'>Progress</p>
                    <div className='w-24 h-24 flex items-center justify-center'>
                      <Progress className='mt-15 w-[100%] shadow-sm' value={progress} color={'blue'}/>
                    </div>
                  </div>
                  <div className='flex-1 text-center flex flex-col justify-center items-center'>
                    <p className='font-semibold'>Score</p>
                    <p className='text-blue-800 w-24 h-24 pt-4 text-[30px] font-bold'>{score}/{totalScore}</p>
                  </div>
                  <div className='flex-1 text-center flex flex-col justify-center items-center'>
                    <p className='font-semibold'>Level</p>
                    <p className='text-blue-800 w-40 h-24 pt-5 text-[20px] font-bold'>{level}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile