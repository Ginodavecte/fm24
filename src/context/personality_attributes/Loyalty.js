import React from 'react';
import NavigationDescriptions from './NavigationDescriptions'

export default function Loyalty() {
  return (
    <div className="loyalty" id="loyalty">
      <div className="title">
        <h4>Loyaliteit</h4>
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
              • Be more supportive of manager’s opinion during interactions.
              • More willing to accept lower value contracts at current club.
              • More likely to stay or want to stay at their current club.
              • More likely to accept transfer decisions made by their current club whether it’s buying or selling other players.
            </div>
            <div className="effect__content-negative">
              Negative Effects:
              • When trying to buy a player with high loyalty – it is more difficult to deal with the player or club to the point of them not wanting to join.
              • When trying to unsettle or convince a player to sign using the media – more likely to be annoyed and not want to join your club.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};