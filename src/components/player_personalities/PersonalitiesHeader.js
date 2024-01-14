import React from 'react';
import { FaExternalLinkSquareAlt, FaHeadSideVirus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PersonalitiesHeader = ({ mainClass }) =>  {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate('/');
  };

  const handleNavigateLink = () => {
    window.location.href = 'https://www.fmscout.com/a-guide-to-player-personalities-football-manager.html';
  }

  return (
    <div className={`${mainClass}__title`}>
      <h3>
        <FaHeadSideVirus /> Karakters (Player Personalities)
      </h3>
      <div className={`${mainClass}__button`}>
        <button onClick={handleNavigateLink} style={{backgroundColor: '#E4A11B'}}>
          <FaExternalLinkSquareAlt />
          <span style={{marginLeft: '8px'}}>FM Scout - Uitleg</span>
        </button>
      </div>
      <div className={`${mainClass}__button`}>
        <button onClick={handleNavigateBack}>Go Back</button>
      </div>
    </div>
  );
};

export default PersonalitiesHeader;