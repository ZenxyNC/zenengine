import './demoComponents.css';

export default function TabSelect({ state, setState }) {
  return(
    <>
      <div id='tabSelect-maindiv'>
        <div 
          className={`tabSelect-option ${state === "review" ? 'selected' : ''}`}
          onClick={() => setState("review")}
        >Review</div>
        <div 
          className={`tabSelect-option ${state === "code" ? 'selected' : ''}`}
          onClick={() => setState("code")}
        >Code</div>
      </div>
    </>
  )
}