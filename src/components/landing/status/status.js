import StatusCard from "./components/statusCard";
import Title from "../title";

export default function Status() {
  const RNDData = [
    {
      projectStatus: "Plan",
      projectName: "Gradient Rays",
      projectDescription : `A gradient ray uses directional color transitions that radiate or flow along a specific path, often creating light-beam or spotlight-like effects with depth and motion.`
    },
    {
      projectStatus: "Plan",
      projectName: "Mesh Gradient",
      projectDescription : `A mesh gradient blends multiple colors across a grid of control points, allowing smooth, organic color transitions with precise control over color placement.`
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