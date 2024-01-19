import React from 'react';
import ScoutsIntroduction from './ScoutsIntroduction';
import ScoutsTopBar from './ScoutsTopBar';

const ScoutsHeader = ( {mainClass} ) => {
  return (
    <div className={`${mainClass}__header`}>
      <ScoutsTopBar mainClass={mainClass} />
      <ScoutsIntroduction mainClass={mainClass} />
    </div>
  )
};

export default ScoutsHeader;