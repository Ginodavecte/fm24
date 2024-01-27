import React from 'react';
import { FaHeadSideVirus } from 'react-icons/fa';

const PersonalitiesTopBar = ( {mainClass} ) => {

  return (
    <div className={`${mainClass}__title`}>
      <div style={{ marginRight: 'auto' }}>
        <h3>
          <FaHeadSideVirus /> Karakters (Player Personalities)
        </h3>
      </div>
    </div>
  );
};

export default PersonalitiesTopBar;