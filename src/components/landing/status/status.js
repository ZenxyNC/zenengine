import { useState } from "react";
import StatusCard from "./components/statusCard";
import Title from "../title";

export default function Status() {
  const [RNDData] = useState([
    {
      projectStatus: "Under development",
      projectName: "Debounce Input",
      projectDescription : `<i>Wait the user is not finished yet</i>, that's the purpose of Debounce Input. The input component will wait until the user stop typing for certain seconds, then do a function/action.`
    },
    {
      projectStatus: "Plan",
      projectName: "State-changes blur",
      projectDescription : `Blurs giving elegancy, premium, and dynamic feels. What if, you can blurify every element each time they changing?`
    },
    {
      projectStatus: "Update incoming",
      projectName: "Snackbar",
      projectDescription : `Snackbar is currently usable, but there are some low level issues : Snackbar font color is unset, inconsistent component naming. Snackbar update is incoming to fix these issues.`
    }
  ])

  return (
    <>
      <div id="status-maindiv">
        <Title 
          string="RnD Status"
        />
        {RNDData.map((item, index) => (
        <StatusCard
          key={index}
          projectStatus={item.projectStatus}
          projectName={item.projectName}
          projectDescription={item.projectDescription}
        />
      ))}
      </div>
    </>
  )
}