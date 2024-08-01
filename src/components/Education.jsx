import React from 'react';
import '../styles/Education.css'

const Education = () => {
  return (
    <div className='education-wrap'>
      <h2>Education</h2>
      <form className='education'>
        <label>
          School Name:
          <input type="text" name="school" />
        </label>
        <label>
          Title of Study:
          <input type="text" name="title" />
        </label>
        <label>
          Date of Study:
          <input type="date" name="date" />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Education;