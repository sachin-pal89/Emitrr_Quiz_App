import React from 'react'
import PythonIcon from "../../assets/images/PythonIcon.png"
import { Progress } from "@material-tailwind/react";

const Profile = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <div className='pt-25 pb-20 mx-40'>
          <div className='pt-40 pb-10 px-20 flex flex-col  text-center'>
            <p className='text-[50px] font-semibold tracking-wide text-blue-800'>Sachin Pal</p>
            <p className='text-lg text-black font-semibold tracking-wide'>@SacPal89</p>
            <p className='text-lg text-blue-500 font-bold tracking-wide mt-4'>Python</p>
          </div>
          <div className='p-4'>
            <h1 className='p-2 font-bold text-[20px]'>Progress</h1>
            <div className='w-full p-2'>
              <div className='transform -transalte-y-20 shadow-lg border-4
                    border-gray-100'>
                <div className='p-2 flex flex-row w-full'>
                  <div className='flex-1 text-center flex flex-col justify-center items-center'>
                    <p className='font-semibold'>Language</p>
                    <img src={PythonIcon} alt="Python" className='w-24 h-24'/>
                  </div>
                  <div className='flex-1 text-center flex flex-col justify-center items-center'>
                    <p className='font-semibold'>Progress</p>
                    <div className='w-24 h-24 flex items-center justify-center'>
                      <Progress className='mt-15 w-[100%] shadow-sm' value={50} color={'blue'}/>
                    </div>
                  </div>
                  <div className='flex-1 text-center flex flex-col justify-center items-center'>
                    <p className='font-semibold'>Score</p>
                    <p className='text-blue-800 w-24 h-24 pt-4 text-[30px] font-bold'>31/50</p>
                  </div>
                  <div className='flex-1 text-center flex flex-col justify-center items-center'>
                    <p className='font-semibold'>Level</p>
                    <p className='text-blue-800 w-40 h-24 pt-5 text-[20px] font-bold'>Intermediate</p>
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