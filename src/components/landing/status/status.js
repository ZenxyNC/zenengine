import StatusCard from "./components/statusCard";
import Title from "../title";

export default function Status() {
  const RNDData = [
    {
      projectStatus: "Plan",
      projectName: "Custom Alert",
      projectDescription : `Stop using old, boring default browser alert. ZenEngine Custom Alert giving you a simple, modern, and premium alert.`
    },
    {
      projectStatus: "Plan",
      projectName: "Click Outside",
      projectDescription : `Click outside will let you know when the user click outside at specific element.`
    }
  ]

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