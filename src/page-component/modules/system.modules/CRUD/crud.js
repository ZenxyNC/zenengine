import '../system.modules.css'

import CodeBlock from '../../codeBlock'
import { useState } from 'react'


export function Crud( type ) {
  return (
    <>
      {type === 'review' && <Review />}
      {type === 'code' && <Code />}
    </>
  )
}


function Review() {
  return (
    <>
      <div className="canvasElem-maindiv">
        <span className='--bold'>CRUD</span>, a protocol that allows a program to <span className='--italic'>Create, Read, Update, or Delete</span> items. So, we can say that <span className='--bold'>CRUD</span> is a client-side data manager.
        <br /><div className='--par-space'></div> 
        <span className='--bold'>ZenEngine</span> makes a <span className='--bold'>CRUD Protocol</span> to help developers in modifying items, with better approaching by bringing ease and simplicity.
      </div>
      <div className="canvasElem-maindiv">
      <span className='--bold'>ZenEngine's CRUD Protocol</span> is working server-less. It’s accessing browser’s <span className='--italic'>localStorage</span>, and the module provides <span className='--italic'>Create, Read, Update, or Delete</span> features to easily modify the stored data in <span className='--italic'>localStorage</span>.
      </div>
    </>
  )
}

function Code() {
  const [callExpanded, setCallExpanded] = useState(false);
  const [codeExpanded, setCodeExpanded] = useState(false);

  const _Call = `
  import { Create, Read, Update, Delete } from "./zenengine/crud";
  
  //Example
  function createData( key, value ) {
    const dataCreator = Create(key, value);
    if (dataCreator.ok) {
      console.log(\`Data created!\`);
    } else {
      console.error(\`Data failed to create : \${dataCreator.message}\`);
    }
  } 
  
  function readData( key ) {
    const dataReader = Read(key);
    if (dataReader.ok) {
      console.log(\`Readed data : \${dataReader.value} \`);
    } else {
      console.error(\`Data failed to read : \${dataReader.message}\`);
    }
  }

  function updateData( key, value ) {
    const dataUpdater = Update(key, value);
    if (dataUpdater.ok) {
      console.log(\`Data updated!\`);
    } else {
      console.error(\`Data failed to update : \${dataUpdater.message}\`);
    }
  } 

  function deleteData( key ) {
    const dataDeleter = Delete(key);
    if (dataDeleter.ok) {
      console.log(\`Readed data : \${dataDeleter.value} \`);
    } else {
      console.error(\`Data failed to read : \${dataDeleter.message}\`);
    }
  }
  `

  const _Code = `
  export function Create( key, value ) {
    if(key.trim() === "") {
      return {ok: false, message: 'The key is invalid'}
    }

    const isKey = localStorage.getItem(key);
    try {
      if(isKey) {
        throw new Error('The key is already in the database.');
      }

      localStorage.setItem(key, value);
      return {ok: true}
    } catch(err) {
      return {ok: false, message: err.message}
    }
  }

  export function Read( key ) {
    if(key.trim() === "") {
      return { ok: false, message: 'The key is invalid' };
    }

    const isKey = localStorage.getItem(key);
    try {
      if(isKey) {
        const readedData = localStorage.getItem(key);
        return { ok: true, value: readedData }
      }

      throw new Error('The key is not in database');
    } catch(err) {
      return {ok: false, message: err.message}
    }
  }

  export function Update( key, value ) {
    if(key.trim() === "") {
      return { ok: false, message: 'The key is invalid' };
    }

    const  isKey = localStorage.getItem(key);
    try {
      if(isKey) {
        localStorage.setItem(key, value);
        return { ok: true };
      }

      throw new Error('The key is not in database'); 
    } catch(err) {
      return { ok: false, message: err.message };
    }
  }

  export function Delete( key ) {
    if(key.trim() === "") {
      return { ok: false, message: 'The key is invalid' };
    }

    const isKey = localStorage.getItem(key);
    try {
      if(isKey) {
        localStorage.removeItem(key);
        return { ok: true };
      }

      throw new Error('The key is not in database');
    } catch(err) {
      return { ok: false, message: err.message };
    }
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
        <button className='canvasElem-button --expand' onClick={(ev) => setCodeExpanded(!codeExpanded)}>{codeExpanded ? 'Collapse' : 'Expand'}</button>
        <pre>
          <CodeBlock code={_Code} language='javascript' />
        </pre>
      </div>

      <div className='canvasElem-title'>Explanation</div>
      <div className={`canvasElem-maindiv --explanation ${codeExpanded ? 'expanded' : ''}`}>
        Make your own event handler in your project, based on your need purpose. The example is in "Call" section.<br /><div className='--par-space'></div><br/>

        The variable needed:<br />
        Create : key, value<br />
        Read : key<br />
        Update : key, value<br />
        Delete : key<br /> <br /><div className='--par-space'></div> 

        <span className='--italic --bold'>Key</span> is the variable name that used to save value. And <span className='--italic --bold'>Value</span> is the data that saved in key.<br /><div className='--par-space'></div> <br />


        <span className='--italic --bold'>The Returns Value</span><br />
        For easier debugging and usage, the function must be called inside a static variable (const), because it returns a value : <br/>
        
        <span style={{ color: '#007AFF' }}>SUCCESS</span> : {'{'} ok: true {'}'}  or {'{'} ok: true, value: <span className='--italic'>read_value</span> {'}'}<br/>
        <span style={{ color: '#FF393D' }}>FAILURE</span> : {'{'} ok: false, message: <span className='--italic'>failure_reason</span> {'}'}
      </div>
    </>
  )
}
