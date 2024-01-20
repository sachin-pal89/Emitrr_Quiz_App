import React, { useState } from 'react'

const QuizQuestion = () => {

    const [lastQuestion, setLastQuestion] = useState(false);

    const handleLastQuestion = () => {
        setLastQuestion(true);
    }

    return (
        <>
            <div className='w-[60%] h-full flex justify-center items-center'>
                <div className='transform -translate-z-20 shadow-lg flex flex-col
                    items-center justify-center'>
                    <p className='p-3 text-[20px] font-semibold text-blue-900'>1. Who developed Python Programming Language?</p>
                    <ul className='py-4 px-5 w-full'>
                        <li className='border-2 border-gray-500 hover:shadow-md cursor-pointer
                        my-3 pl-3 py-3 text-[18px] font-medium rounded-lg'> Wick van Rossum</li>
                        <li className='border-2 border-gray-500 hover:shadow-md cursor-pointer
                        my-3 pl-3 py-3 text-[18px] font-medium rounded-lg'> Rasmus Lerdorf</li>
                        <li className='border-2 border-gray-500 hover:shadow-md cursor-pointer
                        my-3 pl-3 py-3 text-[18px] font-medium rounded-lg'> Guido van Rossum</li>
                        <li className='border-2 border-gray-500 hover:shadow-md cursor-pointer
                        my-3 pl-3 py-3 text-[18px] font-medium rounded-lg'> Niene Stom</li>
                    </ul>
                    <div className='w-full flex flex-col items-center justify-center'>
                        {lastQuestion ? (
                            <button className='mb-4 p-3 w-[30%] text-white bg-blue-800 hover:bg-blue-900 hover:shadow-md rounded-lg'>
                                Submit
                            </button>
                        ): (
                            <button className='mb-4 p-3 w-[30%] text-white bg-blue-800 hover:bg-blue-900 hover:shadow-md rounded-lg'>
                                Next
                            </button>
                        )}
                        <p className='p-2 text-sm font-semibold'> 1 of 50 questions</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizQuestion