import { Fragment, useState } from "react"
import '../styles/DisplayApplication.css'
import emailSvg from '../assets/email.svg';
import phoneSvg from '../assets/phone.svg'

export default function DisplayApplication({ generalInfo, education, experience }) {

  const experienceList = experience.map(e => {
    return(
      <div key={e.company + e.from} >
        <h4>{e.company}</h4>
        <p>{e.from} to {e.to}</p>
        <p>Position: {e.position}</p>
        <p>Responsibilities: {e.responsibilities}</p>
        <hr />
      </div>
    )
  })

  const Head = () => {
    return(
      <div className="general-info">
        <h1>{generalInfo.fname} {generalInfo.lname}</h1>
        <ul className="general-phone-mail">
          <li><img src={phoneSvg} alt="" className="icon" /> {generalInfo.phone}</li>
          <li><img src={emailSvg} alt="" className="icon" /> {generalInfo.mail}</li>
        </ul>
      </div>
    )
  }

  const EducationSection = () => {
    const schoolList = education.map(e => <li key={e.school + e.to}>From {e.from} to {e.to} I went to {e.school} where I studied {e.study}.</li>)
    
    return (
      <>
        <h2>Education Information</h2>
        <ul>
          {schoolList}
        </ul>
      </>
    )
  }

  const ExperienceSection = () => {
    return (
      <div className="experience-section">
        <h2>Personal Experience</h2>
        <div className="experience-container">
        {experienceList}
        </div>
      </div>
    )
  }

  return (
    <div className="display-information">
      <Head/> 
      <EducationSection />
      <hr />
      <ExperienceSection />
      <hr />
    </div>
  )
}