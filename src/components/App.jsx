import { useState } from "react";
import GeneralInformation from "./generalInfo";
import DisplayApplication from "./DisplayApplication";
import EducationForm from "./Education";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({ fname: '', lname: '', phone: '', mail: '' });
  const [educationInfo, setEducationInfo] = useState([]);

  const handleEducationInfo = (data) => {
    const education = [...educationInfo, data];
    setEducationInfo(education);
  }

  const handleReset = () => {
    setEducationInfo([]);
  }

  return (
    <>
      <GeneralInformation onSubmit={(data) => setGeneralInfo(data)} />
      <EducationForm onSubmit={(data) => handleEducationInfo(data)} onReset={handleReset} />
      <DisplayApplication generalInfo={generalInfo} education={educationInfo}/>
    </>
  )
}