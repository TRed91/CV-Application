import { useState } from "react"
import '../styles/DisplayApplication.css'

export default function DisplayApplication({ generalInfo }) {
  //const [data, setData] = useState({});
  
  return (
    <div className="display-information">
      <h2>General Information</h2>
      <ul>
        <li><b>First Name</b>:&emsp;&emsp;&emsp;{generalInfo.fname}</li>
        <li><b>Last Name</b>:&emsp;&emsp;&emsp;{generalInfo.lname}</li>
        <li><b>Phone Number</b>:&emsp;{generalInfo.phone}</li>
        <li><b>E-Mail</b>:&emsp;&emsp;&emsp;&emsp;&emsp;{generalInfo.mail}</li>
      </ul>
    </div>
  )
}