import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LandingPageIcon from '../../assets/images/LandingPageIcon.png'
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
            <NavBar />
            <div className='h-full flex flex-row '>
                <div className='w-1/2 pt-20 px-40 flex flex-col flex-wrap'>
                    <p className='pl-20 text-[60px] font-bold'>Learn new <br />languagues <br />with us.</p>
                    <div className='py-5 pl-20'>
                        <button className='bg-[#1F51FF] hover:bg-[#0047AB] hover:drop-shadow-lg text-white font-bold py-2 px-4 rounded-full'>
                            <Link to='/login' className='flex flex-row'>
                                <p>Get Started</p>
                                <KeyboardArrowRightIcon color="white" sx={{ fontSize: 25 }} />
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='w-1/2 pr-20'>
                    <img src={LandingPageIcon} alt="Logo" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage