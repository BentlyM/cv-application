import './App.css';
import GeneralInfo from './components/GeneralInfo';
import { useState } from 'react';

function App() {
  const DropDown = ({ children , title }) => {
    const [display, setDisplay] = useState(false);

    const btnStyling = {
      padding: '10px',
      backgroundColor: 'gray',
      cursor: 'pointer',
      width: '100%',
    };

    const handleDropDown = (e) => {
      setDisplay(!display);

      if (display) {
        e.target.nextSibling.style.display = 'block';
      } else e.target.nextSibling.style.display = 'none';
    };

    return (
      <div className="dropdown">
        <button style={btnStyling} onClick={handleDropDown}>{title}</button>
        <div className="dropdown-content">{children}</div>
      </div>
    );
  };

  return (
    <>
      <DropDown title="General Information">
        <GeneralInfo />
      </DropDown>
    </>
  );
}

export default App;
