import React from 'react';
import ScoutsIntroduction from './ScoutsIntroduction';
import { HiSearch } from 'react-icons/hi';
import TopBar from '../../../layout/TopBar';
import pageImage from './FM-Scouts.webp';
import ContentPageImage from '../../../layout/ContentPageImage'

const ScoutsHeader = ( {mainClass} ) => {
  return (
    <div className={`${mainClass}__header`}>
      <TopBar icon={<HiSearch />} title="Scouts" />
      <ContentPageImage imageSrc={pageImage} />
      <ScoutsIntroduction mainClass={mainClass} />
    </div>
  )
};

export default ScoutsHeader;