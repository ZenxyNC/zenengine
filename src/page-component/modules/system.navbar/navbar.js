import './navbar.css'

import { useNavigate } from 'react-router-dom'

export default function Navbar({ openSidebar }) {
  const navigate = useNavigate();

  return (
    <div id="navbar-body">
      <div id='navbarContent-wrapper' onClick={() => navigate('/')}>
        <div id='navbarBody-img'></div>
        <div id='navbarBody-title'>ZenEngine</div>
      </div>
      <div onClick={openSidebar}>
        Open Sidebar
      </div>
    </div>
  )
}