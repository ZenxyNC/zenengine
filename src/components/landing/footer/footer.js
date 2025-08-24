import { useNavigate } from 'react-router-dom';
import './footer.css';

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
    <div id="footer-maindiv">
      <div id='footer-navigation'>
        <button onClick={() => directUser("page", "/")}>Docs</button>
        <button onClick={() => directUser("scroll", "zenengine-home")}>Back to top</button>
        <button onClick={() => directUser("page", "/submit-ideas")}>Submit Ideas</button>
      </div>
      <div id='footer-zenengine'>
        <img src='/zenengine-noBG.svg' alt="" />
        <span>ZenEngine</span>
      </div>
      <div id='footer-creator'>
        <p id='footerCreator-quotes'>"I forgot my own code, i should make a project for it."</p><br/>
        - <a 
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