import React from 'react';
import NavigationDescriptions from './NavigationDescriptions'

export default function Temperament() {
  return (
    <div className="temperament" id="temperament">
      <div className="title">
        <h3>Temperament</h3>
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
              <ul>
                <li>
                  Hogere temperament betekent minder snel discipline verliezen of gefrustreerd raken.
                </li>
                <li>
                  Tijdens wedstrijden zijn ze minder snel agressief of gefrustreerd wanneer je team worstelt of scheidsrechterlijke beslissingen “tegen hen” gaan.
                </li>
                <li>
                  Minder snel negatief reageren op kritische of disciplinaire maatregelen.
                </li>
              </ul>
            </div>
            <div className="effect__content-negative">
              Negative Effects:
              <ul>
                <li>
                  Mensen met een lage temperamentbeoordeling moeten voorzichtig worden behandeld en zijn moeilijk te disciplineren omdat ze negatiever zouden reageren.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};