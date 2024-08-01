import React, { useState } from 'react';
import '../styles/GeneralInfo.css'

const GeneralInfo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    for(let item of event.target){
      if(item.type == 'submit') continue;
      
      console.log(item.value);
    }
  }

  return (
    <div className='general-info-warp' id='generalInformation'>
      <h2>General Information</h2>

      <form className='general-info' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required/>
          <span></span>
        </label>

        <label>
          Email:
          <input type="email" name="email" required/>
          <span></span>
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phone" required/>
          <span></span>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default GeneralInfo;
