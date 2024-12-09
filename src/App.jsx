import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PatientsSlider from './components/PatientsSlider'
import BloodPressureChart from './components/BloodPressureChart'
import PatientsDeatils from './components/PatientsDeatils'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='flex py-7 gap-5'>
        <PatientsSlider/>
        <BloodPressureChart/>
        <PatientsDeatils/>
      </div>
    </>
  )
}

export default App