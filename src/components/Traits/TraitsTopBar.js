import React from 'react';
import { GiSkills } from 'react-icons/gi';

const TraitsTopBar = ( { mainClass } ) => {
  return (
    <div className={`${mainClass}__title`}>
      <div>
        <h3>
          <GiSkills /> Traits
        </h3>
      </div>
    </div>
  );
};

export default TraitsTopBar;

