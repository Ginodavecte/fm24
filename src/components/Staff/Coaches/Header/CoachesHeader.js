import React from 'react';
import CoachesIntroduction from './CoachesIntroduction';
import TopBar from '../../../../layout/TopBar';
import { GrUserManager } from 'react-icons/gr';
import ContentPageImage from '../../../../layout/ContentPageImage'
import pageImage from '../FM-Coaches.webp';

const CoachesHeader = ( {mainClass} ) => {
  return (
    <div className={`${mainClass}__header`}>
      <TopBar icon={<GrUserManager />} title="Coaches" />
      <ContentPageImage imageSrc={pageImage} />
      <CoachesIntroduction mainClass={mainClass} />
    </div>
  );
};

export default CoachesHeader;