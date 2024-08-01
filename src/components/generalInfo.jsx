import { useState } from "react";
import '../styles/generalInfo.css';

function Field({ label, fieldType, fId, value, getVal }) {
  const handleInput = (e) => {
    getVal(e.target.value)
  }

  return (
    <div className="input-container">
      <label className="input-label" htmlFor={fId}>
        {label}:
      </label>
      <input type={fieldType} className="input-field" id={fId} onChange={handleInput} value={value} />
    </div>
  )
}

export default function GeneralInformation({ onSubmit }) {
  const [info, setInfo] = useState({ fname: '', lname: '', phone: '', mail: '' });
  const [show, setShow] = useState(true);

  const handleSubmit = () => {
    onSubmit(info);
    setShow(false);
  }

  if (show) {
    return (
      <div>
        <div className="info-fields-container">
          <h3>Edit general information</h3>
          <Field  label     = "First Name"
                  fieldType = "text"
                  fId       = "fname"
                  value     = {info.fname}
                  getVal    = {(val) => setInfo({ ...info, fname: val })} />
    
          <Field  label     = "Last Name"
                  fieldType = "text"
                  fId       = "lname"
                  value     = {info.lname}
                  getVal    = {(val) => setInfo({ ...info, lname: val })} />
    
          <Field  label     = "Phone Number"
                  fieldType = "tel"
                  fId       = "phone"
                  value     = {info.phone}
                  getVal    = {(val) => setInfo({ ...info, phone: val })} />
    
          <Field  label     = "Email"
                  fieldType = "email"
                  fId       = "mail"
                  value     = {info.mail}
                  getVal    = {(val) => setInfo({ ...info, mail: val })} />
          
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="info-fields-container">
        <h3>Edit general information</h3>
        <button onClick={() => setShow(true)}>Edit</button>
      </div>
    )
  }

  
}