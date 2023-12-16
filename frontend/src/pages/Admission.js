import React from 'react'
import Navbar from '../components/Navbar'
import NewSection from '../components/NewSection'
import ExamFlow from '../components/ExamFlow'
import ApplicationFlow from '../components/ApplicationFlow'
export default function Admission() {
  return (
    <>
      <Navbar/>
      
      <div className="d-flex justify-content-center mt-5 ">
      <div className="d-flex gap-5">
        <div className="item"><NewSection/></div>
        <div className="item"><ApplicationFlow/></div>
        <div className="item"><ExamFlow/></div>
        
        
      </div>
    </div>
        
        
      
</>
  )
}
