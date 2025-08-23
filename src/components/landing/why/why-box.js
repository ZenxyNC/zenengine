import SpotlightCard from './components/spotlight'
import './why.css'

export function DefaultBox({ string }) {
  return (
    <SpotlightCard
      className="custom-spotlight-card default-whybox" 
      spotlightColor="rgba(245, 245, 245, 0.2)"
    >
      {string}
    </SpotlightCard>
  )
}

export function IconBox({ icon, amount, string, iconClassName, textClassName }) {

  return(
    <SpotlightCard
      className="custom-spotlight-card iconned-whybox" 
      spotlightColor="rgba(245, 245, 245, 0.2)"
    >
      <img src={icon} alt="No Image." className={`${iconClassName}`}/>
      <div 
        className={textClassName}
      >
        {string}
      </div>
    </SpotlightCard>
  )
}