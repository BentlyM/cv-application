import React from 'react';
import '../styles/PracticalExperience.css';

const PracticalExperience = () => {
  return (
    <div className='experience-warp'>
      <h2>Practical Experience</h2>
      <form className='experience'>
        <label>
          Company Name:
          <input type="text" name="company" />
        </label>
        <label>
          Position Title:
          <input type="text" name="position" />
        </label>
        <label>
          Main Responsibilities:
          <textarea name="responsibilities" />
        </label>
        <label>
          Date From:
          <input type="date" name="from" />
        </label>
        <label>
          Date Until:
          <input type="date" name="until" />
        </label>
      </form>
    </div>
  );
};

export default PracticalExperience;