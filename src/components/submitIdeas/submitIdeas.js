import { useState } from 'react'
import InputField from './components/inputField'
import './submitIdeas.css'
import Footer from './components/footer/footer'
import { FormNavbar } from '../navbar/navbar'

export default function SubmitIdeas() {
  const [userForm, setUserForm] = useState({
    name: '',
    contact: '',
    portfolio: '',
    ideas: '',
    ideaDemo: ''
  })

  function updateState(target, newValue) {
    if(target in userForm) {
      if(newValue.trim() === "") {
        setUserForm(prev => ({
          ...prev,
          [target]: ''
        }));
      } else {
        setUserForm(prev => ({
          ...prev,
          [target]: newValue
        }));
      }
    }
  }

  return (
    <>
      <FormNavbar />
      <div id="submitIdeas-maindiv">
        <div id='submitIdeas-head'>
          <h1>Be a part of <span id='gradient-name'>ZenEngine</span></h1>
          <p>
            Submit your ideas to ZenEngine. Your name, Portfolio, and Contact (Social Media only) will be included too! By submitting your ideas, you are a part of ZenEngine.
          </p>
          <div className='submitIdeas-divider'></div>
          <p>
            You <span style={{ color: 'var(--accent-red)', fontStyle: 'italic' }}>Will Not</span> get paid by submitting your ideas, ZenEngine is a totally cost-free ReactJS module provider.
          </p>
        </div>
        <form>
          <InputField
            title='Your Name'
            required={true}
            placeHolder='Name'
            isTextArea={false}
            event={(value) => updateState('name', value)}
            value={userForm.name}
          />
          <InputField
            title='Your Contact'
            required={true}
            placeHolder='Email, Phone, or Social Media'
            isTextArea={false}
            event={(value) => updateState('contact', value)}
            value={userForm.contact}
          />
          <InputField
            inputType='url' 
            title='Your Portfolio'
            required={false}
            placeHolder='Portfolio URL'
            isTextArea={false}
            event={(value) => updateState('portfolio', value)}
            value={userForm.portfolio}
          />
          <InputField
            title='Your Ideas'
            required={true}
            placeHolder='I have an idea...'
            isTextArea={true}
            event={(value) => updateState('ideas', value)}
            value={userForm.ideas}
          />
          <InputField
            inputType='url'
            title='Idea Demo'
            required={false}
            placeHolder='Idea Demo URL'
            isTextArea={false}
            event={(value) => updateState('ideaDemo', value)}
            value={userForm.ideaDemo}
          />

          <div id='submitIdeas-actions'>
            <button id='submitIdeas-actions-clearForm'
              onClick={(e) => setUserForm({
                name: '',
                contact: '',
                portfolio: '',
                ideas: '',
                ideaDemo: ''
              })}
            >Clear Form</button>
            <button id='submitIdeas-actions-submitForm' type='submit'>Submit</button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  )
}