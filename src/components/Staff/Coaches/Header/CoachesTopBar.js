import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosCalculator } from "react-icons/io";
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';

const CoachesTopBar = ( {mainClass} ) => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate('/');
  };

  const handleCoachCalculatorLink = () => {
    window.location.href = 'https://fmcalc.com/';
  }

  const handleCoachesLink = () => {
    window.location.href = 'https://www.passion4fm.com/football-manager-best-coaches/';
  }

  return (
    <div className={`${mainClass}__title`}>
      <div style={{ marginRight: 'auto' }}>
        <h3>
          <GrUserManager /> Coaches
        </h3>
      </div>
      <div className={`${mainClass}__button`} style={{ marginRight: '8px' }} >
        <button onClick={handleCoachCalculatorLink} style={{backgroundColor: '#E4A11B'}}>
          <IoIosCalculator />
          <span style={{marginLeft: '8px'}}>FM 24 Coach Calculator</span>
        </button>
      </div>
      <div className={`${mainClass}__button`} >
        <button onClick={handleCoachesLink} style={{backgroundColor: '#E4A11B'}}>
          <FaExternalLinkSquareAlt />
          <span style={{marginLeft: '8px'}}>FM 24 - Coaches</span>
        </button>
      </div>
      <div className={`${mainClass}__button`} style={{ marginLeft: 'auto' }}>
        <button onClick={handleNavigateBack}>Go Back</button>
      </div>
    </div>
  );
};

export default CoachesTopBar;