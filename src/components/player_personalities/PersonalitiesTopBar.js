import React from 'react';
import { FaExternalLinkSquareAlt, FaHeadSideVirus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PersonalitiesTopBar = ( {mainClass} ) => {

  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate('/');
  };

  const handleNavigateLink = () => {
    window.open('https://www.fmscout.com/a-guide-to-player-personalities-football-manager.html');
  }

  return (
    <div className={`${mainClass}__title`}>
      <div style={{ marginRight: 'auto' }}>
        <h3>
          <FaHeadSideVirus /> Karakters (Player Personalities)
        </h3>
      </div>
      <div className={`${mainClass}__button`} style={{ marginRight: 'auto', marginLeft: '34px' }}>
        <button onClick={handleNavigateLink} style={{backgroundColor: '#E4A11B'}}>
          <FaExternalLinkSquareAlt />
          <span style={{marginLeft: '8px'}}>FM Scout - Uitleg</span>
        </button>
      </div>
      <div className={`${mainClass}__button`} style={{ marginLeft: 'auto' }}>
        <button onClick={handleNavigateBack}>Go Back</button>
      </div>
    </div>
  );
};

export default PersonalitiesTopBar;