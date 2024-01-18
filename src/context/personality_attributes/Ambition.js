import React from 'react';
import NavigationDescriptions from './NavigationDescriptions';

export default function Ambition() {
  return (
    <div className="ambition" id="ambition">
      <div className="title">
        <h3>Ambitie</h3>
        <NavigationDescriptions />
      </div>
      <div className="content">
        <div className="definition">
          <div className="definition__title">
            Definitie
          </div>
          <div className="definition__content">
            Hoe veel en hoe vaak wil een individu succes behalen of nieuwe terreinen betreden?
            How much and often an individual wants to achieve success or break ground into new territory.
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
                  More likely to want you the manager to be positive about player’s or team’s prospects and goals during team talks, season preview and reviews, meetings and conferences.
                </li>
                <li>
                  More likely to have good training progression.
                </li>
                <li>
                  Excellent for tutoring.
                </li>
              </ul>
            </div>
            <div className="effect__content-negative">
              Negative Effects:
              <ul>
                <li>
                  Will want higher value contract’s for them personally.
                </li>
                <li>
                  Will want to join a club that has a higher reputation, bigger ambitions at managerial and board level, competes in a higher reputation division or continental competition.
                </li>
                <li>
                  This can also influence player’s decisions when it comes to nationalities when there is dual-citizenship.
                </li>
                <li>
                  Will want club and manager to reflect ambition and goals by signing high-reputation players or spend more money.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};