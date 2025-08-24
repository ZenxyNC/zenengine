import InputField from './components/inputField'
import './submitIdeas.css'

export default function SubmitIdeas() {

  return (
    <>
      <div id="submitIdeas-maindiv">
        <InputField 
          inputType = "text"
          title = "Not specified"
          required = {true}
          placeHolder = "Not specified"
          isTextArea = {false}
        />
      </div>
    </>
  )
}