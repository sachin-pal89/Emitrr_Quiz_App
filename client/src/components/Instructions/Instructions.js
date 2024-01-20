import React from 'react'

const Instructions = ({handleStagePhases}) => {
  return (
    <>
        <div className='w-[60%] h-full p-10 flex flex-col 
                justify-center items-center'>
            <p className='text-[50px] mb-10 font-bold text-blue-800'>Instructions</p>
            <div className='p-4 text-start  border-2 border-black transform -translate-z-20 shadow-lg rounded-lg'>
                <ul className='list-disc list-inside pl-3 text-[18px] font-semibold'>
                    <li className='py-2'>
                        Quiz is based on MCQ pattern
                    </li>
                    <li className='py-2'>
                        Select only one answer
                    </li>
                    <li className='py-2'>
                        Your Score would be updated onced answered
                    </li>
                    <li className='py-2'>
                        After selecting click on next for further questions
                    </li>
                    <li className='py-2'>
                        At the end click on submit to complete the Quiz
                    </li>
                </ul>
            </div>
            <button className='mt-5 p-3 w-[30%] text-white bg-blue-800 hover:bg-blue-900
                    hover:shadow-md rounded-lg'
                    onClick={() => handleStagePhases('quizQuestion')}
                >
                    Next
            </button>
        </div>
    </>
  )
}

export default Instructions