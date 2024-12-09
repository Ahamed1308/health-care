import React from 'react'
import BirthIcon from '../assets/details-png/BirthIcon.png'
import FemaleIcon from '../assets/details-png/FemaleIcon.png'
import PhoneIcon from '../assets/details-png/PhoneIcon.png'
import InsuranceIcon from '../assets/details-png/InsuranceIcon.png'
import patientData from '../data/patientData.json';
const PatientsDeatils = () => {
  return (
    <>
        <div className='w-[367px] h-[740px] bg-white border border-gray-300 rounded-lg'>
            <div className='w-full p-5'>
              <img src= {patientData.profile_picture} alt='img' className='h-[200px] w-[200px] mx-auto'/>
            </div>
            <h2 className='font-semibold text-2xl text-center'>{patientData.name}</h2>
            <div className='p-6'>
            <div className='flex gap-4 my-5'>
              <img src= {BirthIcon} alt='img' className='h-11 w-11'/>
              <div>
                <p>Date of Birth</p>
                <p className='font-semibold'>{patientData.date_of_birth}</p>
              </div>
            </div>
            <div className='flex gap-4 my-5'>
              <img src= {FemaleIcon} alt='img' className='h-11 w-11' />
              <div>
                <p>Gender</p>
                <p className='font-semibold'>{patientData.gender}</p>
              </div>
            </div>
            <div className='flex gap-4 my-5'>
              <img src= {PhoneIcon} alt='img' className='h-11 w-11'/>
              <div>
                <p>Contact Info</p>
                <p className='font-semibold'>{patientData.phone_number}</p>
              </div>
            </div>
            <div className='flex gap-4 my-5'>
              <img src= {PhoneIcon} alt='img' className='h-11 w-11'/>
              <div>
                <p>Emergency Contacts</p>
                <p className='font-semibold'>{patientData.emergency_contact}</p>
              </div>
            </div>
            <div className='flex gap-4 my-5'>
              <img src= {InsuranceIcon} alt='img' className='h-11 w-11'/>
              <div>
                <p>Insurance Provider</p>
                <p className='font-semibold'>{patientData.insurance_type}</p>
              </div>
            </div>
            </div>
            <div className='flex justify-center'>
            <div className='h-[41px] w-[220px] bg-[#01F0D0] rounded-3xl flex items-center justify-center font-semibold '>
              <h2>Show All Information</h2> 
            </div>
            </div>
        </div>
    </>
  )
}

export default PatientsDeatils