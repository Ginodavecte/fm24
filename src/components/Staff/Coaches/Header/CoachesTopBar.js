import React from 'react';
import { GrUserManager } from 'react-icons/gr';

const CoachesTopBar = ( {mainClass} ) => {

  return (
    <div className={`${mainClass}__title`}>
      <div style={{ marginRight: 'auto' }}>
        <h3>
          <GrUserManager /> Coaches
        </h3>
      </div>
    </div>
  );
};

export default CoachesTopBar;