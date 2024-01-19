import React from 'react';
import NavigationDescriptions from './NavigationDescriptions'

export default function Pressure() {
  return (
    <div className="pressure" id="pressure">
      <div className="navigation-title">
        <h3>Druk</h3>
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
              <ul>
                <li>
                  Hogere druk rating betekent dat ze minder snel onder druk komen te staan.
                </li>
                <li>
                  Zullen minder snel slechte lichaamstaal vertonen in en rond wedstrijden.
                </li>
                <li>
                  Minder snel negatief beïnvloed door een negatieve mentale staat.
                </li>
                <li>
                  Minder snel reageren op negatieve opmerkingen naar hen en reageert met positieve invloed of prestaties.
                </li>
                <li>
                  Minder snel reageren op discipline.
                </li>
                <li>
                  Meer kans om te presteren in drukke wedstrijden.
                </li>
              </ul>
            </div>
            <div className="effect__content-negative">
              Negative Effects:
              <ul>
                <li>
                  You will have to be more sympathetic or relaxing with players with low pressure ratings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};