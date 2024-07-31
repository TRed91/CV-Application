import { useState } from "react"
import '../styles/DisplayApplication.css'

export default function DisplayApplication({ generalInfo, education }) {

  const schoolList = education.map(e => <li key={e.school + e.to}>From {e.from} to {e.to} I went to {e.school} where I studied {e.study}.</li>)

  return (
    <div className="display-information">
      <h2>General Information</h2>
      <ul>
        <li><b>First Name</b>:&emsp;&emsp;&emsp;{generalInfo.fname}</li>
        <li><b>Last Name</b>:&emsp;&emsp;&emsp;{generalInfo.lname}</li>
        <li><b>Phone Number</b>:&emsp;{generalInfo.phone}</li>
        <li><b>E-Mail</b>:&emsp;&emsp;&emsp;&emsp;&emsp;{generalInfo.mail}</li>
      </ul>
      
      <h2>Education Information</h2>
      <ul>
        {schoolList}
      </ul>
    </div>
  )
}