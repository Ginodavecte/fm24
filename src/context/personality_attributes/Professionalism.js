import React from 'react';
import NavigationDescriptions from './NavigationDescriptions'

export default function Professionalism() {
  return (
    <div className="professionalism" id="proffesionalism">
      <div className="navigation-title">
        <h3>Professionalism</h3>
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
              <ul>
                <li>
                  Hogere professionaliteit betekent dat ze meer professioneel zijn.
                </li>
                <li>
                  Meer kans om hard te werken tijdens trainingen, minder te klagen over werklasten en individuele trainingsbelastingen.
                </li>
                <li>
                  Hebben een toegewijde aanpak van fitness, wat betekent dat ze beter herstellen (waarschijnlijk) en op de lange termijn een natuurlijke daling van hun carrière hebben.
                </li>
                <li>
                  Hebben een positieve en goede trainingsprogressie.
                </li>
                <li>
                  Vertonen een goede lichaamstaal in en rond wedstrijden.
                </li>
                <li>
                  Minder vatbaar voor negatieve mentale attributen of staten, zowel individueel als geheel.
                </li>
                <li>
                  Meer kans om goed te reageren op managementbeslissingen en de mening van de manager, inclusief tutoring.
                </li>
              </ul>
            </div>
            <div className="effect__content-negative">
              Negative Effects:
              <ul>
                <li>
                  Geen negatieve effecten.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};