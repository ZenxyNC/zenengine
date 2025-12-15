import { useParams, useNavigate } from "react-router-dom"
import './navitem.css'

export default function NavItem({ param, name, onClose = () => {} }) {
  const { module } = useParams()
  const navigate = useNavigate()

  function handlePageChange() {
    navigate(`/docs/${param}`)
    onClose()
  }

  return (
    <>
      <div id="navitem-mainbody" onClick={handlePageChange}>
        <div id='navitem-indicator' className={module === param ? "active" : ""}></div>
        <span className={module === param ? "active" : ""}>{name}</span>
      </div>
    </>
  )
}