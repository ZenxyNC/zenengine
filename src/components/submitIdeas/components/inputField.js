import './inputField.css'

export default function InputField({
  inputType = "text",
  title = "Not specified",
  required = true,
  placeHolder = "Not specified",
  isTextArea = false,
  event,
  value
}) {
  return (
    <div id="inputField-maindiv">
      <h1>{title}</h1>
      <p>{required && "Required"}</p>
      {isTextArea ? (
        <textarea
          placeholder={placeHolder}
          required={required}
          onInput={(e) => event(e.target.value)}
          value={value}
        ></textarea>
      ) : (
        <input
          type={inputType}
          placeholder={placeHolder}
          required={required}
          onInput={(e) => event(e.target.value)}
          value={value}
        />
      )}
    </div>
  )
}