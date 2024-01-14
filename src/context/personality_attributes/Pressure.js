import React from 'react';
import NavigationDescriptions from './NavigationDescriptions'

export default function Pressure() {
  return (
    <div className="pressure" id="pressure">
      <div className="title">
        <h4>Druk</h4>
        <NavigationDescriptions />
      </div>
      <div className="content">
        <div className="definition">
          <div className="definition__title">
            Definitie
          </div>
          <div className="definition__content">
            Hoe goed een speler mentaal, fysiek en in het algemeen omgaat/omgaat met veeleisende of drukvolle situaties en scenario's.
            How well a player mentally, physically and overall deals/copes with demanding or pressure situations and scenarios.
          </div>
        </div>
        <div className="effect">
          <div className="effect__title">
            Effecten op een rij
          </div>
          <div className="effect__content">
            <div className="effect__content-positive">
              Positive Effects:
              • Higher pressure rating means they are less likely to feel under pressure.
              • Will less likely display bad body language in and around matches.
              • Less likely to be negatively affected by a negative mental state.
              • Less likely to react to negative comments towards them and rebounds with positive influence or performance.
              • Less likely to react to discipline.
              • More likely to perform in pressure matches.
            </div>
            <div className="effect__content-negative">
              Negative Effects:
              • You will have to be more sympathetic or relaxing with players with low pressure ratings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};