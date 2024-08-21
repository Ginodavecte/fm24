import React from 'react';
import PhysiosIntroduction from './PhysiosIntroduction';
import { FaBriefcaseMedical } from "react-icons/fa";
import TopBar from '../../../layout/TopBar';
import pageImage from './physios.png';
import ContentPageImage from '../../../layout/ContentPageImage'

const PhysiosHeader = ( {mainClass} ) => {
  return (
    <div className={`${mainClass}__header`}>
      <TopBar icon={<FaBriefcaseMedical />} title="Fysio's" />
      <ContentPageImage imageSrc={pageImage} />
      <PhysiosIntroduction mainClass={mainClass} />
    </div>
  )
};

export default PhysiosHeader;