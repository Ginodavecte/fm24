import React from 'react';
import './Coaches.scss';
import CoachesHeader from './Header/CoachesHeader';
import CoachesAttributeDescription from './AttributeDescription/CoachesAttributeDescription';

const Coaches = () => {
  const mainClass = 'coaches';

  return (
    <div className={ mainClass } id="coaches">
      <CoachesHeader mainClass={mainClass} />
      <CoachesAttributeDescription mainClass={mainClass} />
    </div>
  );
};

export default Coaches;