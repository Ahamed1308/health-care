import React from 'react'
import search from '../assets/patients-png/search.png'
import patientsList from '../data/patients.json'
import morehoriz from '../assets/patients-png/more-horiz.png'

import Emily from '../assets/patients-png/Emily.png';
import Ryan from '../assets/patients-png/Ryan.png';
import Brandon from '../assets/patients-png/Brandon.png';
import Jessica from '../assets/patients-png/Jessica.png'
import Samantha from '../assets/patients-png/Samantha.png';
import Ashley from '../assets/patients-png/Ashley.png';
import Olivia from '../assets/patients-png/Olivia.png';
import Tyler from '../assets/patients-png/Tyler.png';
import Kevin from '../assets/patients-png/Kevin.png';
import Dylan from '../assets/patients-png/Dylan.png';
import Nathan from '../assets/patients-png/Nathan.png';
import Mike from '../assets/patients-png/Mike.png';

const imageMapping = {
  'Emily.png': Emily,
  'Ryan.png': Ryan,
  'Brandon.png': Brandon,
  'Jessica.png': Jessica,
  'Samantha.png': Samantha,
  'Ashley.png': Ashley,
  'Olivia.png': Olivia,
  'Tyler.png': Tyler,
  'Kevin.png': Kevin,
  'Dylan.png': Dylan,
  'Nathan.png': Nathan,
  'Mike.png': Mike,
};


const PatientSlider = () => {
  return (
    <div className="w-[367px] h-[800px] overflow-y-auto border border-gray-300 bg-white rounded-lg p-4 space-y-8">
      <div className='flex items-center py-2'>
        <h2 className='text-2xl font-semibold'>Patients</h2>
        <img src={search} alt='img' className='h-[18px] w-[18px] ml-auto'/>
      </div>
      <div className="space-y-4">
        {patientsList.patients.map((patient) => {
          const patientImage = imageMapping[patient.photo];
          return(
            <div key={patient.id} className="flex items-center cursor-pointer">
              <img
                src={patientImage}
                alt={patient.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-sm text-gray-800 font-semibold">{patient.name}</p>
                <div className='flex'>
                  <p>{patient.gender}</p>
                  <p>{patient.age}</p>
                </div>
              </div>
              <img src={morehoriz} className='h-1 w-[18px] ml-auto'/>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default PatientSlider;
