import { useNavigate } from 'react-router-dom';
import './footer.css';

import zenengine from '../../../../resources/zenengine-noBG.svg'

export default function Footer () {
  var navigate = useNavigate()

  function directUser(method, target) {
    if(method === "scroll") {
      window.location.href = `#${target}`
    } else if(method === "page") {
      navigate(target)
    }
  } 


  return (
    <div id="footer-submitideas-maindiv">
      <div id='footer-navigation-form'>
        <button onClick={() => directUser("page", "/docs")}>Docs</button>
        <button onClick={() => directUser("page", "/")}>Home</button>
      </div>
      <div id='footer-zenengine'>
        <img src={zenengine} alt="" />
        <span>ZenEngine</span>
      </div>
      <div id='footer-creator-form'>
        <p id='footerCreator-quotes'>This form was created on behalf of ZenEngine. Your form answer will only be used by ZenEngine Developer. But to keep your data safety, <span style={{ color: 'var(--accent-red)', fontStyle: 'italic' }}>DO NOT</span> share any private information on this form.</p><br/>
        Creator : <a 
            href='https://zenxync.github.io/lucasharel'
            target="_blank" 
            rel="noopener noreferrer"
          >Lucas Harel</a>
      </div>
      <div id="footer-license">
        2025 © ZenEngine. MIT License.
      </div>
    </div>
  )
}