import React from 'react';
import TopBar from '../../layout/TopBar';
import { GiSkills } from 'react-icons/gi';
// import ContentPageImage from '../../layout/ContentPageImage'
// import pageImage from './FM-Traits.webp';

const TraitsHeader = ( { mainClass, introduction } ) => {
  return (
    <div className={`${mainClass}__header`}>
      <TopBar title="Traits" icon={<GiSkills />} />
      {/*<ContentPageImage imageSrc={pageImage} />*/}
      <div className={`${mainClass}__introduction`}>
        <h3>Introductie</h3>
        <p>{introduction}</p>
      </div>
    </div>
  );
};

export default TraitsHeader;

