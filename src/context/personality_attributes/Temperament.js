import React from 'react';
import NavigationDescriptions from './NavigationDescriptions'

export default function Temperament() {
  return (
    <div className="temperament" id="temperament">
      <div className="title">
        <h4>Temperament</h4>
        <NavigationDescriptions />
      </div>
      <div className="content">
        <div className="definition">
          <div className="definition__title">
            Definitie
          </div>
          <div className="definition__content">
            Hoe gedisciplineerd het gedrag van een speler is wanneer gebeurtenissen hem in alle aspecten van de simulatie tegenwerken.
            How disciplined a player’s conduct is when events go against them in all aspects of the simulation.
          </div>
        </div>
        <div className="effect">
          <div className="effect__title">
            Effecten op een rij
          </div>
          <div className="effect__content">
            <div className="effect__content-positive">
              Positive Effects:
              • Higher temperament means less likely to lose discipline or be frustrated.
              • During matches they are less likely to become aggressive or frustrated when your team is struggling or referring decisions go “against them”.
              • Less likely to react negatively to critical or disciplinary measures.
            </div>
            <div className="effect__content-negative">
              Negative Effects:
              • People with low temperament ratings need to be handled lightly, and difficult to discipline as they would react more negatively.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};