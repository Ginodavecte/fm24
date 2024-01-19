import React from 'react';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { HiSearch } from 'react-icons/hi';

const ScoutsTopBar = ( {mainClass} ) => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate('/');
  };

  const handleNavigateWonderkids = () => {
    window.location.href = 'https://www.fmscout.com/a-football-manager-2024-wonderkids.html';
  }

  const handleNavigateDescription = () => {
    window.location.href = 'https://www.passion4fm.com/how-to-find-best-scouts-football-manager/';
  }

  return (
    <div className={`${mainClass}__title`}>
      <div style={{ marginRight: 'auto' }}>
        <h3>
          <HiSearch /> Scouts
        </h3>
      </div>
      <div className={`${mainClass}__button`} style={{ marginRight: '8px' }} >
        <button onClick={handleNavigateWonderkids} style={{backgroundColor: '#E4A11B'}}>
          <FaExternalLinkSquareAlt />
          <span style={{marginLeft: '8px'}}>FM Scout - Wonderkids</span>
        </button>
      </div>
      <div className={`${mainClass}__button`} >
        <button onClick={handleNavigateDescription} style={{backgroundColor: '#E4A11B'}}>
          <FaExternalLinkSquareAlt />
          <span style={{marginLeft: '8px'}}>FM Scout - Description</span>
        </button>
      </div>
      <div className={`${mainClass}__button`} style={{ marginLeft: 'auto' }}>
        <button onClick={handleNavigateBack}>Go Back</button>
      </div>
    </div>
  );
};

export default ScoutsTopBar;