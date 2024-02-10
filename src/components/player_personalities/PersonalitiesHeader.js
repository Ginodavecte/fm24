import React from 'react';
import PersonalitiesIntroduction from './PersonalitiesIntroduction';
import { FaHeadSideVirus } from 'react-icons/fa';
import TopBar from '../../layout/TopBar';
import ContentPageImage from '../../layout/ContentPageImage';
import pageImage from './FM-Player-Personalities.webp';

const PersonalitiesHeader = ({ mainClass }) =>  {

  return (
    <div className={`${mainClass}__header`}>
      <TopBar title="Karakters" icon={<FaHeadSideVirus />}/>
      <ContentPageImage imageSrc={pageImage} />
      <PersonalitiesIntroduction mainClass={mainClass}/>
    </div>
  );
};

export default PersonalitiesHeader;