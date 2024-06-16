import { useState } from 'react'
import quizMeLogo from './assets/quizmelogo.png'
import './index.css'

function App() {

  return (
    <div className="content">
      <div className="logo-container">
        <img src={quizMeLogo} className="logo" alt="QuizMe Logo" />
      </div>
      <div className="text-container">
        <h1 className="stacked-text">Join</h1>
        <h1 className="stacked-text">QuizMe</h1>
        <h1 className="stacked-text">Now!</h1>
      </div>
      <div className="form-container">
        <div className="text-container">
          <h2 className="small-text">Turn Concepts into Comprehension.</h2>
          <h2 className="small-text">Become one of our early access users.</h2>
        </div>
        <input type="text" placeholder="First Name" className="input-field" />
        <input type="text" placeholder="Last Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <div className="checkbox-container">
          <input type="checkbox" id="signup-checkbox" className="checkbox" />
          <label htmlFor="signup-checkbox" className="checkbox-label">Sign up for emails and notifications</label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
        <div className="launch">
          <h2 className="small-text">Full Launch September 1st.</h2>
        </div>
      </div>
    </div>
  )
}

export default App
