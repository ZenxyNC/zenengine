import './landing.css'

export default function Title({ string, alignment = "center", weight = 700, customClassName = "default-title" }) {
  return (
    <h1
      style={{
        textAlign: alignment,
        fontWeight: weight,
      }}
      className = {customClassName}
      dangerouslySetInnerHTML={{ __html : string}}
    />
  )
}