import React, { useState } from 'react';
import '../styles/GeneralInfo.css'

const GeneralInfo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  
  }

  return (
    <div className='general-info-warp' id='generalInformation'>
      <h2>General Information</h2>

      <form className='general-info' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name"/>
        </label>

        <label>
          Email:
          <input type="email" name="email"/>    
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phone"/>          
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default GeneralInfo;
