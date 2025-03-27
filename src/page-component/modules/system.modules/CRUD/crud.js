import '../system.modules.css'

export function Crud( type ) {
  if (type === 'review') {
    return ( Review() )
  } else if (type === 'code') {
    return ( Code() )

  }
}


function Review() {
  return (
    <>
      <div className="canvasElem-maindiv">CRUD Review Tab</div>
    </>
  )
}

function Code() {
  return (
    <>
      <h1>This is code tab</h1>
    </>
  )
}

