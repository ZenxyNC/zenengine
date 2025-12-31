import { useState } from 'react';
import './navside.css';

import NavItem from './navitem/navitem';

export default function NavSide({
  navSide,
  setNavSide
}) {
  const [modules] = useState([
    {
      param: "snackbar",
      name: "Snackbar"
    },
    {
      param: "debounce-input",
      name: "Debounce Input"
    },
    {
      param: "sanitize-string",
      name: "Sanitize String"
    }
  ])

  return (
    <>
      <div 
        id="navside-maindiv"
        className={`${navSide ? 'isOpened' : ''}`}
      >
        <h1>Modules</h1>
        <div id='navside-navitem'>
          {modules.map((module, index) => (
            <NavItem 
              key={index}
              param={module.param}
              name={module.name}
              onClose={() => setNavSide(!navSide)}
            />
          ))}
        </div>
      </div>
    </>
  )
}