import { useState } from "react";
import '../styles/generalInfo.css'

function Field ({label, type, id, value, getVal}) {
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">{label}: </label>
      <input type={type} id={id} value={value} className="input-field" onChange={(e) => getVal(e.target.value)}/>
    </div>
  )
}

export default function EducationForm({ onSubmit, onReset }) {
  const [info, setInfo] = useState({school: '', study: '', from: '', to:''});
  const [show, setShow] = useState(true);

  const handleSubmit = () => {
    onSubmit(info);
    setShow(false);
  }

  if (show) {
    return (
      <div className="info-fields-container">
        <h3>Edit education information</h3>
        <Field  label   = "School" 
                type    = "text" 
                id      = "school" 
                value   = {info.school} 
                getVal  = {(val) => setInfo({...info, school: val})}/>
  
        <Field  label   = "Study" 
                type    = "text" 
                id      = "study" 
                value   = {info.study} 
                getVal  = {(val) => setInfo({...info, study: val})} />
  
        <Field  label   = "From" 
                type    = "date" 
                id      = "from" 
                value   = {info.from} 
                getVal  = {(val) => setInfo({...info, from: val})} />
  
        <Field  label   = "To" 
                type    = "date" 
                id      = "to" 
                value   = {info.to} 
                getVal  = {(val) => setInfo({...info, to: val})} />
  
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => onReset()}>Reset</button>
      </div>
    )
  } else {
    return (
      <div className="info-fields-container">
        <h3>Edit education information</h3>
        <button onClick={() => setShow(true)}>Edit</button>
      </div>
    )
  }
  
}