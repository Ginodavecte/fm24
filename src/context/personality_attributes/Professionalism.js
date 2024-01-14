import React from 'react';
import NavigationDescriptions from './NavigationDescriptions'

export default function Professionalism() {
  return (
    <div className="professionalism" id="professionalism">
      <div className="title">
        <h4>Professionalism</h4>
        <NavigationDescriptions />
      </div>
      <div className="content">
        <div className="definition">
          <div className="definition__title">
            Definitie
          </div>
          <div className="definition__content">
            Hoe goed de houding van een speler in het algemeen is. Individueel naar hun carrière, wedstrijdprestaties en trainingsprestaties.
            How good a player’s attitude is overall. Individually to their career, match performance and training performances.
          </div>
        </div>
        <div className="effect">
          <div className="effect__title">
            Effecten op een rij
          </div>
          <div className="effect__content">
            <div className="effect__content-positive">
              Positive Effects:
              • High professionalism means they are more professional.
              • More likely to work hard in training, complain about work loads and individual training loads less.
              • Have a dedicated approach to fitness, meaning better recovery’s (probably) and in the long run have a natural decline later in their careers.
              • Have a positive and good training progression.
              • Display good body language in and around matches.
              • Less likely to be impacted by negative mental attributes or states whether individually or as a whole.
              • More likely to react well to management decisions and manger’s opinions including tutoring.</div>
            <div className="effect__content-negative">
              Negative Effects:
              None
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};