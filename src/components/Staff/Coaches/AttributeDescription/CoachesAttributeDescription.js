import React from 'react';
import CoachesAttributes from './CoachesAttributes';

const CoachesAttributeDescription = ({mainClass} ) => {
  return (
    <div className={`${mainClass}__attribute-description`}>
      <h3>Attributen Uitleg Overzicht</h3>
      <p>
        Al deze stafkenmerken zijn te vinden onder de kolom ‘coachingkenmerken’ binnen het profiel van een
        achterkamerstaf die geschikt is als coach, of elke rol die verband houdt met het werken op het
        trainingsveld met spelers.
      </p>
      <CoachesAttributes mainClass={mainClass} />
    </div>
  );
};

export default CoachesAttributeDescription;