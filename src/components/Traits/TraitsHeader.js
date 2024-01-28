import React from 'react';
import TraitsTopBar from './TraitsTopBar'

const TraitsHeader = ( { mainClass } ) => {
  return (
    <div className={`${mainClass}__header`}>
      <TraitsTopBar mainClass={mainClass} />
    </div>
  );
};

export default TraitsHeader;

