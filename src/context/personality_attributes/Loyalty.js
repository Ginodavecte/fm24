import React from 'react';
import NavigationDescriptions from './NavigationDescriptions'

export default function Loyalty() {
  return (
    <div className="loyalty" id="loyalty">
      <div className="navigation-title">
        <h3>Loyaliteit</h3>
        <NavigationDescriptions />
      </div>
      <div className="content">
        <div className="definition">
          <div className="definition__title">
            Definitie
          </div>
          <div className="definition__content">
            Hoe sterk de loyaliteit van een speler aan zijn huidige club is.
            How strong a player’s allegiance to their current club is.
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
                  Be more supportive of manager’s opinion during interactions.
                </li>
                <li>
                  Meer bereid om een lager contract te accepteren bij huidige club.
                </li>
                <li>
                  Meer bereid om te blijven of te willen blijven bij huidige club.
                </li>
                <li>
                  Meer bereid om transfer beslissingen van huidige club te accepteren, of het nu gaat om het kopen of verkopen van andere spelers.
                </li>
              </ul>
            </div>
            <div className="effect__content-negative">
              Negative Effects:
              <ul>
                <li>
                  When trying to buy a player with high loyalty – it is more difficult to deal with the player or club to the point of them not wanting to join.
                </li>
                <li>
                  When trying to unsettle or convince a player to sign using the media – more likely to be annoyed and not want to join your club.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};