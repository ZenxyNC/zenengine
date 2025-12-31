import "./navside.css"
import ZenEngine from "../../../../resources/zenengine-noBG.svg"
import { useNavigate } from "react-router-dom";

export default function Navbar({ 
  navSide,
  setNavSide
 }) {
  const navigate = useNavigate();
  return(
    <>
      <div id="docsnavbar-mainbody">
        <div 
          id="docsnavbar-wrapper"
          onClick={() => navigate("/")}
        >
          <img src={ZenEngine} alt="" loading='lazy' id='navbar-zenengineIcon'/>
          <span id='navbar-zenengineName'>ZenEngine</span>
        </div>

        <div
          role="button"
          id="navbar-menu-icon"
          onClick={() => setNavSide(!navSide)}
        >

        </div>
      </div>
    </>
  )
}