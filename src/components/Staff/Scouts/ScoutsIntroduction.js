import React from 'react';

const ScoutsIntroduction = ( {mainClass} ) => {
  return (
    <div className={`${mainClass}__introduction`}>
      <div className="introduction__title">
        <h3>Introductie</h3>
      </div>
      <div className="introduction">
        <div className="introduction__text">
          Wanneer je professionele en efficiënte scouts probeert te vinden, moet je hun belangrijkste eigenschappen kennen,
          en weten wat de beste scouts van een slechte onderscheidt. Het is tijd om te analyseren welke kenmerken
          van het personeel belangrijk zijn om hun betrouwbaarheid te bepalen, zodat ze nauwkeurige rapporten
          kunnen verstrekken bij het evalueren van nieuwe talenten of overdrachtsdoelstellingen –
          wat hun uitmuntendheid en prestaties bepaalt – en hoe goed ze zijn in het doen van hun werk.
          Om ervoor te zorgen dat een scout nauwkeurige rapporten van spelers kan leveren, zijn er twee
          belangrijke eigenschappen nodig voor alle Football Manager-scouts, ongeacht hun rol.
          We categoriseren ze als de belangrijkste algemene scoutingattributen.
          De aanvullende kenmerken die verderop worden besproken, zullen van belang zijn afhankelijk van hun
          specifieke taken en belangrijkste verantwoordelijkheden.
        </div>
      </div>
      <div className="description">
        <h3 className="description__title">
          Belangrijke Eigenschappen
        </h3>
        <div className="description__text">
          Een beoordeling van 15 in de vaardigheden van het beoordelen van spelers en het beoordelen van potentiële spelers is de minimumvereiste voor een nauwkeurig scoutrapport. Maar ongeacht de attribuutwaardering zul je een speler altijd een aantal keren moeten scouten om het rapport zo accuraat mogelijk te krijgen om een ​​definitief oordeel te kunnen vellen voordat je op een specifieke speler kunt bieden.
          Via talrijke rapporten kom je meer te weten over zijn persoonlijkheid, sterke en zwakke punten en spelerseigenschappen.
          Een hoofdscout heeft betere vaardigheden nodig op het gebied van het beoordelen van het potentieel van spelers en het beoordelen van de vaardigheden van spelers dan de rest van je scoutingteam, omdat je erop kunt vertrouwen dat de hoofdscout het definitieve oordeel over een speler maakt of je een second opinion geeft over een interessante speler. . Een goede hoofdscout moet over een behoorlijk niveau van scoutingkennis beschikken, afhankelijk van jouw voorkeuren en clubniveau.
        </div>
      </div>
    </div>
  );
};

export default ScoutsIntroduction;