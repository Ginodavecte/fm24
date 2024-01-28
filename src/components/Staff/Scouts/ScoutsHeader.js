import React from 'react';
import ScoutsIntroduction from './ScoutsIntroduction';
import { HiSearch } from 'react-icons/hi';
import TopBar from '../../../layout/TopBar';

const ScoutsHeader = ( {mainClass} ) => {
  return (
    <div className={`${mainClass}__header`}>
      <TopBar icon={<HiSearch />} title="Scouts" />
      <ScoutsIntroduction mainClass={mainClass} />
    </div>
  )
};

export default ScoutsHeader;