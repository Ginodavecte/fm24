import React from 'react';

const PhysiosIntroduction = ( {mainClass} ) => {
  return (
    <div className={`${mainClass}__introduction`}>
      <div className="introduction__title">
        <h3>Introductie</h3>
      </div>
      <div className="introduction">
        <div className="introduction__text">
          Fysio’s maken deel uit van het medisch team van een club.De fysiotherapeut of fysio vervult nog steeds
          een zeer belangrijke rol in Football Manager. Ook nu het medische team is uitgebreid met
          Sportwetenschappers, is de Fysio nog steeds de stafmedewerker die de geblesseerde spelers
          verzorgt en ervoor zorgt dat zij zo snel mogelijk terugkeren naar het team. Bij het zoeken naar goede fysio's
          is fysiotherapie de belangrijkste eigenschap. Hoe hoger deze is, hoe efficiënter de fysio zal zijn.
        </div>
      </div>
      <div className="description">
        <h3 className="description__title">
          Andere Eigenschappen
        </h3>
        <div className="description__text">
          Hoewel Football Manager nooit expliciet heeft verklaard dat andere eigenschappen ook belangrijk zijn
          voor een fysio, zijn er velen die geloven dat eigenschappen als vastberadenheid, discipline
          en motivatie bijdragen aan de kwaliteiten van de fysio, maar als dat het geval is,
          zou het klein moeten zijn. People Management is een eigenschap die belangrijk is voor de Hoofd Fysio.
        </div>
        <h3 className="description__second-title">
          Hoeveel fysio's moet je hebben?
        </h3>
        <div className="description__second-text">
          Zo veel als het bestuur je toestaat. Hoe meer fysio's je hebt, hoe sneller ze kunnen werken met de
          blessures waarmee je team te maken kan krijgen, wat snellere hersteltijden betekent.
        </div>
      </div>
    </div>
  );
};

export default PhysiosIntroduction;