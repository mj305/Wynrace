import React, { useEffect } from 'react';

import './ButtonsLanding.css';

const ButtonsLanding = () => {

  useEffect(() => {
    /* fetchFunction() */
  })


  return (
    <>
      <div className='button-landing-button-container' >
          <button className='button-landing-search-item button' >Football</button>
          <button className='button-landing-search-item button' >Soccer</button>
          <button className='button-landing-search-item button' >Gymnastics</button>
          <button className='button-landing-search-item button' >Swimming</button>
          <button className='button-landing-search-item button' >Baseball</button>
          <button className='button-landing-search-item button' >Track and Field</button>
          <button className='button-landing-search-item button' >Diving</button>
          <button className='button-landing-search-item button' >Lacrosse</button>
          <button className='button-landing-search-item button' >Softball</button>
          <button className='button-landing-search-item button' >Volleyball</button>
          <button className='button-landing-search-item button' >Tennis</button>
          <button className='button-landing-search-item button' >Hockey</button>
          <button className='button-landing-search-item button' >Flag Football</button>
          <button className='button-landing-search-item button' >Golf</button>
      </div>
    </>
  )
}

export default ButtonsLanding;


/*
button
onClick={fetchFunction}
*/