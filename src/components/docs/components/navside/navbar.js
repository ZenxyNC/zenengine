import "./navside.css"
import ZenEngine from "../../../../resources/zenengine-noBG.svg"

export default function Navbar({ 
  navSide,
  setNavSide
 }) {
  return(
    <>
      <div id="docsnavbar-mainbody">
        <div id="docsnavbar-wrapper">
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