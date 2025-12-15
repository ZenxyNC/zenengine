import ZenEngine from '../../resources/zenengine-noBG.svg';
import './navbar.css';

import { useNavigate } from 'react-router-dom';


export function MainNavbar() {
  const navigate = useNavigate();
  return (
    <>
      <div id="navbar-mainbody">
        <img src={ZenEngine} alt="" loading='lazy' id='navbar-zenengineIcon'/>
        <span id='navbar-zenengineName'>ZenEngine</span>

        <button id='navbar-tryZenengine'
          onClick={() => navigate("/docs/snackbar")}
        >
          Try ZenEngine
          <div></div>
        </button>
      </div>
    </>
  )
}

export function FormNavbar() {
  
  return (
    <>
      <div id="navbar-mainbody" className='formnavbar'>
        <div id='FormNavbar-wrapper'>
          <img src={ZenEngine} alt="" loading='lazy' id='navbar-zenengineIcon'/>
          <span id='navbar-zenengineName'>ZenEngine</span>
        </div>
      </div>
    </>
  )
}