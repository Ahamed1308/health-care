import React from 'react'
import arrowup from '../assets/chart-png/arrowup.png'
import arrowdown from '../assets/chart-png/arrowdown.png'
import heart from '../assets/chart-png/heart.png'
import respiratory from '../assets/chart-png/respiratory.png'
import temperature from '../assets/chart-png/temperature.png'
import Chart from 'chart.js/auto';
import {Line, Bar} from 'react-chartjs-2'
import patientchart from "../data/patientchart.json"
import patientData from '../data/patientData.json'


const BloodPressureChart = () => {
  const diagnosis = patientData.diagnosis_history[0];
  return (
    <>
      <div className='h-[650px] w-[766px] border border-gray-300 bg-white rounded-lg p-5'>
        <h2 className='font-semibold text-xl py-2'>Diagnosis History</h2>
        <div className='h-[298px] w-[726px] bg-[#F4F0FE]'> 
          <h2 className='text-[18px] font-semibold px-4 py-2'>Blood Pressure</h2>
            <div className='flex h-[250px] w-[700px] px-4 py-2'>
            <Line
            data ={{
              labels:patientchart.map((data)=>data.label),
              datasets:[
                {
                  label : "systolic",
                  data : patientchart.map((data)=>data.systolic),
                  backgroundColor : "#FFFFFF",
                  borderColor : "#E66FD2"
                },
                {
                  label : "diastolic",
                  data : patientchart.map((data)=>data.diastolic),
                  backgroundColor : "#FFFFFF",
                  borderColor : "#8C6FE6"
                },
              ],
            }} />
            <div className='gap-y-2'>
                <h4 className='font-semibold'>Systolic</h4>
                <p className='text-2xl'>{diagnosis.blood_pressure.systolic.value}</p>
                <div className='flex items-center gap-2'>
                  <img src={arrowup} className='w-[10px] h-[5px]'/>
                  <p>{diagnosis.blood_pressure.systolic.levels}</p>
                </div>
                <h4 className='font-semibold'>Diastolic</h4>
                <p className='text-2xl'>{diagnosis.blood_pressure.diastolic.value}</p>
                <div className='flex items-center gap-2'>
                  <img src={arrowdown} className='w-[10px] h-[5px]'/>
                  <p>{diagnosis.blood_pressure.diastolic.levels}</p>
                </div>
            </div>
            </div>           
        </div>
        <div className='flex space-x-8 py-5'>
          <div className='w-56 h-56 p-4 bg-[#E0F3FA]'>
            <img src={respiratory} className='h-24 w-24'/>
            <p className='text-[16px]'>Respiratory Rate</p>
            <p className='text-3xl font-semibold mb-4'>{diagnosis.respiratory_rate.value} bpm</p>
            <p>{diagnosis.respiratory_rate.levels}</p>
          </div>
          <div className='w-56 h-56 p-4 bg-[#FFE6E9]'>
            <img src={temperature} className='h-24 w-24'/>
            <p className='text-[16px]'>Temprature</p>
            <p className='text-3xl font-semibold mb-4'>{diagnosis.temperature.value}°F</p>
            <p>{diagnosis.temperature.levels}</p>
          </div>
          <div className='w-56 h-56 p-4 bg-[#FFE6F1]'>
            <img src={heart} className='h-24 w-24'/>
            <p className='text-[16px]'>Heart Rate</p>
            <p className='text-3xl font-semibold mb-4'>{diagnosis.heart_rate.value} bpm</p>
            <div className='flex items-center gap-2'>
                  <img src={arrowdown} className='w-[10px] h-[5px]'/>
                  <p>{diagnosis.heart_rate.levels}</p>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BloodPressureChart