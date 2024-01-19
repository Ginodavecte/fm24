import React from 'react';
import CoachesTopBar from './CoachesTopBar';
import CoachesIntroduction from './CoachesIntroduction';

const CoachesHeader = ( {mainClass} ) => {
  return (
    <div className={`${mainClass}__header`}>
      <CoachesTopBar mainClass={mainClass} />
      <CoachesIntroduction mainClass={mainClass} />
    </div>
  );
};

export default CoachesHeader;