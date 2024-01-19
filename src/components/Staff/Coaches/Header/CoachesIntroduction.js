import React from 'react';

const CoachesIntrodiction = ( {mainClass} ) => {
  return (
    <div className={`${mainClass}__introduction`}>
      <div className="introduction__title">
        <h3>Introductie</h3>
      </div>
      <div className="introduction">
        <div className="introduction__text">
          <p>
            Coaches trainen uw spelers en spelen een sleutelrol in hun algemene ontwikkeling terwijl ze bij uw club zijn.
            De training is opgesplitst in verschillende vaardigheidssecties.
            Daarom is het van cruciaal belang om coaches op een evenwichtige, methodische manier aan te stellen.
            Zorg voor een werkbare mix van aanvallende, verdedigende, tactische en technische coaches.
          </p>
          <p>
            Om de beste trainers in Football Manager te vinden, is het essentieel om te begrijpen hoe de verschillende stafkenmerken het algehele teammanagement beïnvloeden.
            Door meer te leren over hun definities en hoe ze met elkaar verbonden zijn,
            kun je een inferieure groep achterkamerpersoneel opzetten, waar professionaliteit en de juiste coachingeigenschappen het moreel van de speler,
            de wekelijkse prestaties en uiteindelijk hun kwaliteiten zullen vergroten; eigenschappen en vaardigheden (traits).
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoachesIntrodiction;