import React from 'react';
import CoachesIntroduction from './CoachesIntroduction';
import TopBar from '../../../../layout/TopBar';
import { GrUserManager } from 'react-icons/gr';

const CoachesHeader = ( {mainClass} ) => {
  return (
    <div className={`${mainClass}__header`}>
      <TopBar icon={<GrUserManager />} title="Coaches" />
      <CoachesIntroduction mainClass={mainClass} />
    </div>
  );
};

export default CoachesHeader;