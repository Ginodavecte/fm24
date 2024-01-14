import React from 'react';
import NavigationDescriptions from './NavigationDescriptions'

export default function Sportsmanship() {
  return (
    <div className="sportsmanship" id="sportsmanship">
      <div className="title">
        <h4>Sportsmanship</h4>
        <NavigationDescriptions />
      </div>
      <div className="content">
        <div className="definition">
          <div className="definition__title">
            Definitie
          </div>
          <div className="definition__content">
            Hoe ethisch of ‘sportief’ een speler is.
            How ethical or “sportsman-like” a player is.
          </div>
        </div>
        <div className="effect">
          <div className="effect__title">
            Effecten op een rij
          </div>
          <div className="effect__content">
            <div className="effect__content-positive">
              Positive Effects:
              • Respect the opposition during matches or after matches.
              • Supportive of majority of manager’s decisions and interactions such as tutoring a young player.
            </div>
            <div className="effect__content-negative">
              Negative Effects:
              • They could miss opportunities in matches to gain advantages due to their ethical values.
                Not really do the “dirty work” or do the “shit-housery” needed to get the job done in difficult situations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};