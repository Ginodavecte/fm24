import React from 'react';
import { HiSearch } from 'react-icons/hi';

const ScoutsTopBar = ( {mainClass} ) => {

  return (
    <div className={`${mainClass}__title`}>
      <div style={{ marginRight: 'auto' }}>
        <h3>
          <HiSearch /> Scouts
        </h3>
      </div>
    </div>
  );
};

export default ScoutsTopBar;