import { useState } from "react";
import '../styles/generalInfo.css';

function Field({ label, type, id, value, getVal}) {
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">{label}: </label>
      <input type={type} className="input-field" id={id} value={value} onChange={e => getVal(e.target.value)} />
    </div>
  ) 
}

export default function Experience({ onSubmit, onReset }) {
  const [info, setInfo] = useState({ company: '', position: '', responsibilities: '', from: '', to: ''});
  const [show, setShow] = useState(true)

  const handleSubmit = () => {
    onSubmit(info);
    setShow(false);
  }

  if (show) {
    return (
      <div className="info-fields-container">
        <h3>Edit Experience Info</h3>
        <Field  label   = "Company" 
                type    = "text" 
                id      = "company" 
                value   = {info.company} 
                getVal  = {(val) => setInfo({...info, company: val})}
                />
        <Field  label   = "Position" 
                type    = "text" 
                id      = "position" 
                value   = {info.position} 
                getVal  = {(val) => setInfo({...info, position: val})}
                />
        <Field  label   = "Responsibilities" 
                type    = "text" 
                id      = "responsibilities" 
                value   = {info.responsibilities} 
                getVal  = {(val) => setInfo({...info, responsibilities: val})}
                />
        <Field  label   = "From" 
                type    = "date" 
                id      = "from" 
                value   = {info.from} 
                getVal  = {(val) => setInfo({...info, from: val})}
                />
        <Field  label   = "To" 
                type    = "date" 
                id      = "to" 
                value   = {info.to} 
                getVal  = {(val) => setInfo({...info, to: val})}
                />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => onReset()}>Reset</button>
      </div>
    )
  } else {
    return(
      <div className="info-fields-container">
        <h3>Edit Experience Info</h3>
        <button onClick={() => setShow(true)}>Edit</button>
      </div>
    )
  }
  
}