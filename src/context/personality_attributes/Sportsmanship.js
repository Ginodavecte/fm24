import React from 'react';
import NavigationDescriptions from './NavigationDescriptions'

export default function Sportsmanship() {
  return (
    <div className="sportsmanship" id="sportsmanship">
      <div className="title">
        <h3>Sportsmanship</h3>
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
              <ul>
                <li>
                  More likely to be respectful of the opposition during matches or after matches.
                </li>
                <li>
                  Supportive of majority of manager’s decisions and interactions such as tutoring a young player.
                </li>
              </ul>
            </div>
            <div className="effect__content-negative">
              Negative Effects:
              <ul>
                <li>
                  More likely to be disrespectful of the opposition during matches or after matches.
                </li>
                <li>
                  More likely to be disrespectful of the manager’s decisions and interactions such as tutoring a young player.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};