import { useState } from "react";
import TabSelect from "../components/tabSelect";
import Review from "../components/review";
import DebounceInput from "./demo";
import Code from "../components/code";

import './debounce-input.css';


export default function DebounceInputDemo() {
  const [state, setState] = useState("review");
  const [debounceDuration, setDebounceDuration] = useState(1000);
  const [inputValue, setInputValue] = useState("");


  const codes = {
    call: `import DebounceInput from './zenengine/debounce-input';
import { useState } from 'react';

const [inputValue, setInputValue] = useState('');

<DebounceInput
  type="text"
  duration={1000}
  action={(value) => setInputValue(value)}
/>`,
JS: `import { useRef, useEffect } from 'react'

export default function DebounceInput({ duration, action, ...props }) {
  const pauseDuration = !isNaN(duration) ? parseInt(duration) : 1000;
  const timeoutRef = useRef(null);
  
  const handleInput = (value) => {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      if(action && typeof action === 'function') {
        action(value)
      } else {
        console.warn('No action function provided')
      }
    }, pauseDuration)
  }
  
  useEffect(() => {
    return () => {
      if(timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  
  return(
    <>
      <input
        {...props}
        onInput={(event) => handleInput(event.target.value)}
      />
    </>  
  )
}`,
  }

  return (
    <>
      <h1 className="demo-title">Debounce Input</h1>
      <TabSelect
        state={state}
        setState={setState}
      />

      {state === "review" ? (
        <>
          <Review>
            A debounce input waits for a short pause in typing before running a function, so it doesn’t trigger on every keystroke. This helps prevent unnecessary calls — like API requests or validations — until the user stops typing.
          </Review>
          <Review sizeY={160}>
            <input 
              type="number"
              id="debounce-input-input"
              placeholder="Debounce Duration"
              value={debounceDuration}
              onChange={(e) => setDebounceDuration(e.target.value)}
            /><br/>
            <DebounceInput
              type="text"
              placeholder="Type something..."
              duration={debounceDuration ? debounceDuration : 1000}
              action={(value) => setInputValue(value)}
              id="debounce-input-input"
            /><br/>
            Value : <span id="debounce-input-value">{inputValue}</span>
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
          <h1 id="demoCode-title">How It Works?</h1>
          <Review>
            You can replace all inputs using this component. So instead of using input tag, you can use DebounceInput tag.
            <br/>
            <br/>
            Let's take a look in Call Section. There are 2 required parameters: duration and action. But, you can add any HTML attributes to the component tag like its an casual input tag.
            <br/>
            <br/>
            duration is a number value that determines the duration of the debounce in milliseconds. By default its 1000ms.
            <br/>
            action is a function that is called when the input value changes. It should be a executable function.
            <br/>
            <br/>
          </Review>
        </>
      )}
    </>
  )
}