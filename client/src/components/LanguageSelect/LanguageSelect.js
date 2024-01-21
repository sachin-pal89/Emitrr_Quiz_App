import React, { useState } from 'react'

const LanguageSelect = ({ handleStagePhases, handleLangSelection }) => {

    return (
        <>
            <div className='h-full w-[80%] flex flex-col justify-center items-center'>
                <p className='text-[50px] font-bold text-blue-800'>Select a language to learn.</p>
                <select name="languages" id="languages"
                    className='mt-5 w-[50%] text-center shadow-lg bg-gray-50 border-6
                        border-gray-800 text-gray-900 text-sm rounded-lg
                        py-2 px-2 focus:ring-blue-500 focus:border-blue-500 block'
                    onChange={(e) => handleLangSelection(e.target.value)}
                >
                    <option value="Python">Python</option>
                    <option value="CPP">C++</option>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
                <button className='mt-10 p-3 w-[30%] text-white bg-blue-800 hover:bg-blue-900
                    hover:shadow-md rounded-lg'
                    onClick={() => handleStagePhases('instructions')}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default LanguageSelect