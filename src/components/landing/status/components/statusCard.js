import '../status.css'

export default function StatusCard({ projectStatus = "Unknown", projectName = "Unknown", projectDescription = "Unknown" }) {
  const cardConfig = {
    alertColor: determineColor(projectStatus),
    titleColor: projectName === "Unknown" ? '#FF393D' : '#F5F5F5',
    decsriptionColor: projectDescription === "Unknown" ? '#FF393D' : '#F5F5F5',
  }

  function determineColor(state) {
    switch(state) {
      case "Unknown" :
        return "var(--font-primary)";
      case "Under development" :
        return "var(--accent)";
      case "Plan" :
        return "var(--element-yellow)";
      case "Update incoming" :
        return "var(--element-green)";
    }
  }

  return (
    <div id="statusCard-maindiv">
      <div id='statusCard-bubble' style={{ backgroundColor: `${cardConfig.alertColor}` }}></div>
      <h2 id='statusCard-title'>{projectName}</h2>
      <h3 id='statusCard-status'>{projectStatus}</h3>
      <p 
        id='statusCard-description'
        style={{ color: `${cardConfig.decsriptionColor}` }}
        dangerouslySetInnerHTML={{ __html: projectDescription }}
      >

      </p>
    </div>
  )
}