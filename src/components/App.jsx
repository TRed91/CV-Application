import { useState } from "react";
import GeneralInformation from "./generalInfo";
import DisplayApplication from "./DisplayApplication";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({ fname: '', lname: '', phone: '', mail: '' });
  return (
    <>
      <GeneralInformation onSubmit={(data) => setGeneralInfo(data)} />
      <DisplayApplication generalInfo={generalInfo} />
    </>
  )
}