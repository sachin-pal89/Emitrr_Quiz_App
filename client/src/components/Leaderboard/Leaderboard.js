import React from 'react'

const Leaderboard = () => {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[80%] h-[80%] flex justify-center items-center'>
          <div className='mb-40 w-[50%] flex flex-col justify-center items-center'>
            <p className='p-3 mb-4 text-[40px] font-bold text-blue-900'>Python Leaderboard</p>
            <div className='w-[80%] flex flex-col transform -translate-z-30 shadow-lg border-2 
                    border-gray-300 rounded-lg'>
              <div className='flex flex-row text-center m-2'>
                <p className='w-1/4 font-bold'>Rank</p>
                <p className='w-1/2 font-bold'>Username</p>
                <p className='w-1/2 font-bold'>Score</p>
              </div>
              <div className='flex flex-row text-center m-2'>
                <p className='w-1/4'>1</p>
                <p className='w-1/2'>SacPal89</p>
                <p className='w-1/2'>31/50</p>
              </div>
              <div className='flex flex-row text-center m-2'>
                <p className='w-1/4'>2</p>
                <p className='w-1/2'>SacPal89</p>
                <p className='w-1/2'>31/50</p>
              </div>
              <div className='flex flex-row text-center m-2'>
                <p className='w-1/4'>3</p>
                <p className='w-1/2'>SacPal89</p>
                <p className='w-1/2'>31/50</p>
              </div>
              <div className='flex flex-row text-center m-2'>
                <p className='w-1/4'>4</p>
                <p className='w-1/2'>SacPal89</p>
                <p className='w-1/2'>31/50</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Leaderboard