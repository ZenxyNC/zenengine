import { useRef, useEffect } from 'react'

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
}