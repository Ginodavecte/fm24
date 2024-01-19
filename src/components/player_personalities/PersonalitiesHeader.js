import React from 'react';
import PersonalitiesIntroduction from './PersonalitiesIntroduction';
import PersonalitiesTopBar from './PersonalitiesTopBar';

const PersonalitiesHeader = ({ mainClass }) =>  {

  return (
    <div className={`${mainClass}__header`}>
      <PersonalitiesTopBar mainClass={mainClass}/>
      <PersonalitiesIntroduction mainClass={mainClass}/>
    </div>
  );
};

export default PersonalitiesHeader;