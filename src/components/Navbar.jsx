import React from 'react'
import TestLogo from '../assets/navbar-svg/TestLogo.svg'
import Overview from '../assets/navbar-svg/Overview.svg'
import Schedule from '../assets/navbar-svg/Schedule.svg'
import Patients from '../assets/navbar-svg/Patients.svg'
import Message from '../assets/navbar-svg/Message.svg'
import Transactions from '../assets/navbar-svg/Transactions.svg'
import doctor from '../assets/navbar-svg/doctor.png'
import settings from '../assets/navbar-svg/settings.png'
import more from '../assets/navbar-svg/more.png'

const Navbar = () => {
  return (
    <div className='flex gap-48 items-center  h-[72px] bg-white rounded-[70px]'>
        <div className='flex p-8'>
            <img src={TestLogo} alt='logo' className='h-12 w-52'/>
        </div>
        <div className='flex gap-6 items-center'>
          <ul className='flex gap-10 text-sm w-[663px] h-16 items-center'>
            <li className='flex gap-1'>
              <img src={Overview} alt='img' className='w-4 h-[17px]'/>Overview
            </li>
            <li className='flex gap-1'>
              <img src={Patients} alt='img' className='w-24[px] h-[17px]'/>Patients
            </li>
            <li className='flex gap-1'>
              <img src={Schedule} alt='img' className='w-4 h-[17px]'/>Schedule
            </li>
            <li className='flex gap-1'>
              <img src={Message} alt='img' className='w-[19px] h-[17px]'/>Message
            </li>
            <li className='flex gap-1'>
              <img src={Transactions} alt='img' className='w-[22px] h-[17px]'/>Transactions
            </li>
          </ul>
          <div className='flex items-center gap-2 p-8'>
            <img src={doctor} alt='doctor' className='h-12' />
            <div className='flex gap-5'>
            <div>
              <h4 className='font-bold'>Dr. Joes Simmons</h4>
              <p>General Practitioner</p>
            </div>
            <div className='flex items-center gap-4'>
              <img src={settings} alt='settings' className='h-5 w-5'/>
              <img src={more} alt='more' className='h-[18px] w-1'/>
            </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Navbar