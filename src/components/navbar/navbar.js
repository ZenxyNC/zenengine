import ZenEngine from '../../resources/zenengine-noBG.svg';
import './navbar.css'

export default function Navbar() {
  
  return (
    <>
      <div id="navbar-mainbody">
        <img src={ZenEngine} alt="" loading='lazy' id='navbar-zenengineIcon'/>
        <span id='navbar-zenengineName'>ZenEngine</span>

        <button id='navbar-tryZenengine'>
          Try ZenEngine
          <div></div>
        </button>
      </div>
    </>
  )
}