
import { useState } from 'react';
import '../system.modules.css';
import CodeBlock from '../../codeBlock'

import SnackbarExample from './example.engine/snackbar'

export function Snackbar( type ) {
  return (
    <>
      {type === 'review' && <Review />}
      {type === 'code' && <Code />}
    </>
  )
}

function Review() {
  const [snackbar, setSnackbar] = useState({
    isOpened: false,
    message: 'Hello World!',
    duration: 3000,
  })

  return (
    <>
      {snackbar.isOpened && <SnackbarExample message={snackbar.message} duration={snackbar.duration} onClose={() => setSnackbar({ isOpened: false, message: '', duration: 3000 })}/>}
      <div className='canvasElem-title'>
        Preview
      </div>
      <div className='canvasElem-preview'>
        <button 
          className='sayHello-button'
          onClick={() => 
            setSnackbar({
              isOpened : true, 
              message: 'Hello, world!',
              duration: snackbar.duration
            })
          }
        >Say Hello!</button>

      </div>
    
      <div className='canvasElem-maindiv'>
        Snackbar... but this is not a food!<br />
        Snackbar component can be used to display a message to user. You can send an alerts, notifications, informations faster, simpler, and stylish with Snackbar.
        <br/>
        <div className='--par-space'></div>
        You feel like can modify it cooler? The css is modifyable, don't hold your creativity!
      </div>
    
    </>
  )
}

function Code() {
  const [callExpanded, setCallExpanded] = useState(false);
  const [codeExpanded, setCodeExpanded] = useState(false);
  const [cssExpanded, setcssExpanded] = useState(false);

  const _Call = `
  import Snackbar from './zenengine/snackbar';
  import { useState } from 'react';

  const [snackbar, setSnackbar] = useState({
    isOpened: false,
    message: 'Hello World!',
    duration: 3000,
  })

  <button 
    className='sayHello-button'
    onClick={() => 
      setSnackbar({
        isOpened : true, 
        message: 'Hello, world!',
        duration: snackbar.duration
      })
    }
  >Say Hello!</button>

  {snackbar.isOpened && 
    <SnackbarExample 
      message={snackbar.message} 
      duration={snackbar.duration} 
      onClose={() => setSnackbar({ 
        isOpened: false, 
        message: '', 
        duration: 3000 
      })}
    />
  }
  `

  const _Code = `
  import { useEffect, useState } from 'react';
  import './snackbar.css';
  
  export default function SnackbarExample({ message, duration, onClose }) {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false)
        const closeEvent = setTimeout(() => {
          onClose()
        }, 500);
        return () => clearTimeout(closeEvent);
      }, duration);
      return () => clearTimeout(timer);
    }, [message]);
  
    return (
      <div className={\`snackbar \${visible ? 'show' : ''}\`}>
        {message}
      </div>
    );
  }
  `

  const _CSS = `
  /*Snackbar Styles*/
  /*Lines that has comment is safe to modify.*/

  .snackbar {
    visibility: hidden;
    opacity: 0;
    z-index: 9999;

    position: fixed;
    bottom: -60px; /*You can change this carefully! Don't forget to change the bottom property on the .snackbar.show as well.*/
    right: 15px;  /*Positioned 15px from right by default. Change this based on yuor needs.*/

    width: 300px; /*Changable.*/
    height: 45px; /*Changable*/

    padding: 5px 10px 5px 15px; /*Changable*/

    background-color: #F5F5F5; /*Changable*/
    box-shadow: 0px 0px 16px -2px #000000; /*Optional, changable*/

    border-radius: 15px; /*Changable*/

    font-size: 17px; /*Changable*/
    font-weight: 500; /*Optional, changable*/

    display: grid;
    align-items: center; /*Text is positioned center VERTICALLY by default. Optional, changable.*/

    filter: blur(15px);

    transition: 0.5s cubic-bezier(.38,.09,.24,.98);
  }

  .snackbar.show {
    visibility: visible;
    opacity: 1;

    bottom: 15px; /*You can change this carefully!*/

    filter: blur(0px);
  }
  `

  function copyCode(varname) {

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(varname);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };

    handleCopy()
  }

  return (
    <>
      <div className='canvasElem-title'>Call</div>
      <div className={`canvasElem-maindiv --code ${callExpanded ? 'expanded' : ''}`}>
        <button className='canvasElem-button --copy' onClick={(ev) => copyCode(_Call)}></button>
        <button className='canvasElem-button --expand' onClick={(ev) => setCallExpanded(!callExpanded)}>{callExpanded ? 'Collapse' : 'Expand'}</button>
        <pre>
          <CodeBlock code={_Call} language='javascript' />
        </pre>
      </div>

      <div className='canvasElem-title'>Code</div>
      <div className={`canvasElem-maindiv --code ${codeExpanded ? 'expanded' : ''}`}>
        <button className='canvasElem-button --copy' onClick={(ev) => copyCode(_Code)}></button>
        <button className='canvasElem-button --expand' onClick={(ev) => setCodeExpanded(!codeExpanded)}>{codeExpanded? 'Collapse' : 'Expand'}</button>
        <pre>
          <CodeBlock code={_Code} language='javascript' />
        </pre>
      </div>

      <div className='canvasElem-title'>CSS</div>
      <div className={`canvasElem-maindiv --code ${cssExpanded ? 'expanded' : ''}`}>
        <button className='canvasElem-button --copy' onClick={(ev) => copyCode(_CSS)}></button>
        <button className='canvasElem-button --expand' onClick={(ev) => setcssExpanded(!cssExpanded)}>{cssExpanded? 'Collapse' : 'Expand'}</button>
        <pre>
          <CodeBlock code={_CSS} language='CSS' />
        </pre>
      </div>

      <div className='canvasElem-title'>Explanation</div>
      <div className={`canvasElem-maindiv --explanation`}>
        The code in the "Call" section is just an example, you can make your own handler. Here's what you need to attent:<br />
        <ol>
          <li>The default state (snackbar default settings).</li>
          <li><span className='--italic'>snackbar.js</span> is not necessarily need to be modified.</li>
          <li>Attent the required variable for the snackbar (isOpened, message, duration).</li>
        </ol>

        Default snackbar value:<br />
        isOpened : boolean<br />
        message : string<br />
        duration : integer<br /><div className='--par-space'></div> 
      </div>
    </>
  )
}