import React from 'react';
import PersonalitiesIntroduction from './PersonalitiesIntroduction';
import { FaHeadSideVirus } from 'react-icons/fa';
import TopBar from '../../layout/TopBar';

const PersonalitiesHeader = ({ mainClass }) =>  {

  return (
    <div className={`${mainClass}__header`}>
      <TopBar title="Karakters (Player Personalities)" icon={<FaHeadSideVirus />}/>
      <PersonalitiesIntroduction mainClass={mainClass}/>
    </div>
  );
};

export default PersonalitiesHeader;