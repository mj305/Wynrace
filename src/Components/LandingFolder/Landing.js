import React, { useState } from 'react';

import ButtonsLanding from '../ButtonsLandingFolder/ButtonsLanding';

import './Landing.css';

const Landing = () => {

  const [query, setQuery] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault()
    /* fetchFunction() */
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <div className='landing-container' >
        <div className="landing-headers-container" >
          <h2 className="landing-header-1" > The Athletic Network for Everyone </h2>
        </div>

          <div className='landing-form-container' >
            <form onSubmit={handleSubmit} className='landing-form' >
              <input onChange={handleChange} placeholder='Search Athlete...' className='landing-form-input' />
              <button type='submit' className='landing-form-button' > Search </button>
            </form>
          </div>

          <div className='landing-component-container' >
            <ButtonsLanding />
          </div>
      </div>
    </>
  )
}

export default Landing;