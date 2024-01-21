import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Leaderboard = ({ quiz, user }) => {

  const [lang, setLang] = useState('Python');
  const [leaderboard, setLeaderboard] = useState([]);

  const handleLang = async (data) => {

    const response = await axios.post('http://localhost:5000/lang/leaderboard', { lang_name: data });

    const rankedLeaderboard = response.data.map((user, index) => ({ ...user, rank: index + 1 }));
    setLeaderboard(rankedLeaderboard);

    setLang(data);

  }
  
  const initialLang = async () => {
    
    setLang(user.lang[0].lang_name)

    const response = await axios.post('http://localhost:5000/lang/leaderboard', { lang_name: user.lang[0].lang_name });

    const rankedLeaderboard = response.data.map((user, index) => ({ ...user, rank: index + 1 }));
    setLeaderboard(rankedLeaderboard);

  }

  useEffect(() => {
    
    initialLang();

  }, [])

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[80%] h-[80%] flex justify-center items-center'>
          <div className='mb-40 w-[50%] flex flex-col justify-center items-center'>
            <div className='w-[60%] pb-5 flex items-center justify-center'>
              <select name="language" id="language" 
                    className='w-[60%] my-4 py-1 text-center border-2 rounded-lg'
                    onChange={(e) => handleLang(e.target.value)}
              >
                {quiz.map((langItem) => (
                  <option key={langItem.lang_name}
                        value={langItem.lang_name} 
                        className='text-sm p-1 text-blue-500 font-bold tracking-wide mt-4'
                  >
                    {langItem.lang_name}
                  </option>
                ))}
              </select>
            </div>
            <p className='p-3 mb-4 text-[40px] font-bold text-blue-900'>{lang} Leaderboard</p>
            <div className='w-[80%] flex flex-col transform -translate-z-30 shadow-lg border-2 
                    border-gray-300 rounded-lg'>
              <div className='flex flex-row text-center m-2'>
                <p className='w-1/4 font-bold'>Rank</p>
                <p className='w-1/2 font-bold'>Username</p>
                <p className='w-1/2 font-bold'>Score</p>
              </div>
              {leaderboard.map((users) => (
                <div className='flex flex-row text-center m-2'
                    key={users.username}
                >
                  <p className='w-1/4'>{users.rank}</p>
                  <p className='w-1/2'>{users.username}</p>
                  <p className='w-1/2'>{users.score}/{users.total_score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Leaderboard