import React from 'react';
import Ambition from './Ambition';
import Determination from './Determination';
import Loyalty from './Loyalty';
import Pressure from './Pressure';
import Professionalism from './Professionalism';
import Sportsmanship from './Sportsmanship';
import Temperament from './Temperament';

export default function AttributeDescription({ mainClass }) {
  return (
    <div className={`${mainClass}__description`}>
      <div className={`${mainClass}__description-title`}>
        Uitleg Karakter Eigenschappen
      </div>
      <div className={`${mainClass}__description-descriptions`} >
        <Ambition />
        <Determination />
        <Loyalty />
        <Pressure />
        <Professionalism />
        <Sportsmanship />
        <Temperament />
      </div>
    </div>
  );
};