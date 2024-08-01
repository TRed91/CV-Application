import { useState } from "react";
import GeneralInformation from "./generalInfo";
import DisplayApplication from "./DisplayApplication";
import EducationForm from "./Education";
import Experience from "./Experience";
import '../styles/App.css';

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({ fname: 'John', lname: 'Doe', phone: '555-555-5555', mail: 'john.doe@fake.com' });
  const [educationInfo, setEducationInfo] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleEducationInfo = (data) => {
    const education = [...educationInfo, data];
    setEducationInfo(education);
  }

  const handleExperienceInfo = (data) => {
    const addExperience = [...experience, data];
    setExperience(addExperience);
  }

  const handleEducationReset = () => {
    setEducationInfo([]);
  }

  const handleExperienceReset = () => {
    setExperience([]);
  }

  return (
    <>
      <div className="form-container">
        <GeneralInformation onSubmit={data => setGeneralInfo(data)} />
        <EducationForm onSubmit={data => handleEducationInfo(data)} onReset={handleEducationReset} />
        <Experience onSubmit={data => handleExperienceInfo(data)} onReset={handleExperienceReset} />
      </div>
      <div className="display-container">
        <DisplayApplication generalInfo={generalInfo} education={educationInfo} experience={experience}/>
      </div>
    </>
  )
}