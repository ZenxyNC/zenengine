import { useState } from "react"
import TabSelect from "../components/tabSelect"
import Review from "../components/review"
import Code from "../components/code";

import './snackbar.css';
import Snackbar from "./demo";

export default function SnackbarDemo() {
  const [state, setState] = useState("review");
  const codes = {
    call:`import Snackbar from './zenengine/snackbar';
import { useState } from 'react';

const [snackbar, setSnackbar] = useState({
  isOpened: false,
  message: 'Hello World!',
  duration: 3000,
})

<button 
  className='sayHello-button'
  onClick={() => 
    setSnackbar(prevSnackbar => ({
      ...prevSnackbar,
      isOpened : true, 
      message: 'Hello, world!',
    }))
  }
>Say Hello!</button>

{snackbar.isOpened && 
  <Snackbar 
    message={snackbar.message} 
    duration={snackbar.duration} 
    onClose={() => setSnackbar(prevSnackbar => ({
      ...prevSnackbar,
      isOpened: false,
    }))}
  />
}`,
JS:`import { useEffect, useState } from 'react';
import './snackbar.css';

export default function Snackbar({ message, duration, onClose }) {
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
}`,
CSS:`/*Snackbar Styles*/
/*Lines that has comment is safe to modify.*/

.snackbar {
  visibility: hidden;
  opacity: 0;
  z-index: 9999;

  position: fixed;
  bottom: -60px; /*You can change this carefully!*/
  right: 15px;  /*Positioned 15px from right by default. Change this based on yuor needs.*/

  width: 300px; /*Changable.*/
  height: 45px; /*Changable*/

  padding: 5px 10px 5px 15px; /*Changable*/

  background-color: #F5F5F5; /*Changable*/
  box-shadow: 0px 0px 16px -2px #000000; /*Optional, changable*/

  border-radius: 15px; /*Changable*/

  font-size: 17px; /*Changable*/
  font-weight: 500; /*Optional, changable*/
  color: #0F131A

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
}`
  }

  const [snackbar, setSnackbar] = useState({
    isOpened: false,
    message: 'Hello World!',
    duration: 3000,
  })
  return (
    <>
      <h1 id="demo-title">Snackbar</h1>
      <TabSelect
        state={state}
        setState={setState}
      />
      {state === "review" ? (
        <>
          <Review>
            Snackbar, but not a food. Snackbar component can be used to display message to user. Snackbar designed to show alerts, notifications, and short informations to user — faster, simpler, stylish and non-disruptive.
            <br/><br/>Don’t hold your creativity, the CSS is full of docs. Make it cooler.
          </Review>
          <Review
            sizeY={400}
          >
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
              <Snackbar 
                message={snackbar.message} 
                duration={snackbar.duration} 
                onClose={() => setSnackbar(prevSnackbar => ({
                  ...prevSnackbar,
                  isOpened: false,
                }))}
              />
            }
          </Review>
        </>
      ) : (
        <>
          <h1 id="demoCode-title">Call</h1>
          <Code>
            {codes.call}
          </Code>
          <h1 id="demoCode-title">JavaScript</h1>
          <Code>
            {codes.JS}
          </Code>
          <h1 id="demoCode-title">CSS</h1>
          <Code
            codeLang = "css"
          >
            {codes.CSS}
          </Code>
          <h1 id="demoCode-title">How It Works?</h1>
          <Review>
            Let's take a look at Call section. There are 3 parameters: isOpened, message, and duration.
            <br/>
            <br/>
            isOpened is a boolean value that determines whether the snackbar is opened or not.
            <br/>
            message is a string value that determines the message to be displayed.
            <br/>
            duration is a number value that determines the duration of the snackbar in milliseconds.
            <br/>
            <br/>
          </Review>
        </>
      )

      }
    </>
  )
}