import { useState } from "react";
import TabSelect from "../components/tabSelect";
import Review from "../components/review";
import Code from "../components/code";
import "./sanitizeString.css";

import { SanitizeString } from "./demo";

export default function SanitizeStringDemo() {
  const [state, setState] = useState("review");
  const [input, setInput] = useState("");
  const [probihited, setProbihited] = useState("")

  const codes = {
    Call:`import { SanitizeString } from './zenengine/sanitizeString';
import { useState } from 'react';
    
const [input, setInput] = useState('');
const probihited = "admin or 1=1";

<input 
  type="text"
  placeholder="Type Something"
  value={input} 
  onChange={(e) => setInput(SanitizeString(e.target.value, probihited))}
/>`,
    JS:`export function SanitizeString(string, probihitedString = "/_PROBIHITED_STRING_/") {
  if (!probihitedString) {
    probihitedString = "/_PROBIHITED_STRING_/";
  }
  
  const originalString = string;
  const lowercaseString = string.toLowerCase();
  const lowercaseProhibitedString = probihitedString.toLowerCase();

  var sanitizedString = originalString;

  if(lowercaseString.includes("<script>")) {
    var scriptIndex = lowercaseString.indexOf("<script>");
    if(lowercaseString.includes("</script>")) {
      var scriptEndIndex = lowercaseString.indexOf("</script>") + 9;
      sanitizedString = originalString.substring(0, scriptIndex) + originalString.substring(scriptEndIndex);
    } else {
      sanitizedString = originalString.substring(0, scriptIndex) + originalString.substring(scriptIndex + 8);
    }
  }

  if(lowercaseString.includes(lowercaseProhibitedString)) {
    var prohibitedStringIndex = lowercaseString.indexOf(lowercaseProhibitedString);
    sanitizedString = originalString.substring(0, prohibitedStringIndex) + originalString.substring(prohibitedStringIndex + probihitedString.length);
  }

  return sanitizedString;
}`,
  }

  return (
    <>
      <h1 id="demo-title">Sanitize String</h1>
      <TabSelect
        state={state}
        setState={setState}
      />

      {state === "review" ? (
        <>
          <Review>
            A string sanitizer cleans user-provided text by removing or neutralizing content that could be unsafe or unwanted. In your code, it strips out script tags (to help prevent XSS attacks) and deletes any custom “prohibited” substring you pass in. This helps ensure only safe, allowed text continues through your app.
          </Review>
          <Review sizeY={300}>
            <h2 id="sanitize-string-title">Try to type {`<script>`}</h2>
            <div id="sanitize-string-wrapper">
              <label>Probihited String : </label><br/><input 
                type="text"
                id="sanitize-string-probihited"
                placeholder="admin or 1=1"
                value={probihited}
                onChange={(e) => setProbihited(e.target.value)}
              />
              <br/>
              <label>Input : </label><br/><input 
                type="text"
                id="sanitize-string-input"
                placeholder="Type Something"
                value={input} 
                onChange={(e) => setInput(SanitizeString(e.target.value, probihited))}
              />
              <br/>
              <label>Result : </label><span>{input}</span>
            </div>
          </Review>
        </>
      ) : (
        <>
          <h1 id="demoCode-title">Call</h1>
          <Code>
            {codes.Call}
          </Code>
          <h1 id="demoCode-title">JavaScript</h1>
          <Code>
            {codes.JS}
          </Code>
          <h1 id="demoCode-title">How It Works?</h1>
          <Review>
            This component is only a function to call. You can use it in your input handlers.
            <br/>
            <br/>
            To use the function, you just need to call SanitizeString() and provide the required parameters, string adn probihitedString.
            <br/>
            <br/>
            string is the string need to be sanitized.
            <br/>
            probihitedString is the string you want to remove. If you don't provide this parameter, it will use default value "/_PROBIHITED_STRING_/" to prevent any string from being removed.
          </Review>
        </>
      )}
    </>
  )
}