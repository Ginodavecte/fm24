import React from 'react';
import NavigationDescriptions from './NavigationDescriptions';
import { Link } from 'react-router-dom';

// EffectList component for rendering the positive and negative effects
const EffectList = ({ effects, className, title }) => (
  <div className={`effect__content-${className}`}>
    <p>{title}</p>
    <ul>
      {effects.map((effect, index) => (
        <li key={index}>{effect}</li>
      ))}
    </ul>
  </div>
);

const PersonalitiesCards = ({ mainClass, personalityCards, allKeys, allSlugs }) => {

  // Render a single personality card
  const renderCard = (card, index) => (
    <div id={card.slug} key={index}>
      <div className="navigation-title">
        <h3>
          <Link to="/player-personalities#table" >
            {card.title}
          </Link>
        </h3>
        <NavigationDescriptions titles={allKeys.map(key => personalityCards[key].title)} slugs={allSlugs} />
      </div>
      <div className="content">
        <div className="definition">
          <div className="definition__title">Definitie</div>
          <div className="definition__content">
            <p>{card.description}</p>
          </div>
        </div>
        <div className="effect">
          {
            card.effects && card.effects.length > 0 &&
            (
              <div className="effect__content">
                <div className="effect__title">Effecten op een rij</div>
                <EffectList effects={card.effects[0]['positive'].split('<li>')} className="positive" title="Positieve effecten" />
                <EffectList effects={card.effects[0]['negative'].split('<li>')} className="negative" title="Negatieve effecten" />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${mainClass}__description`}>
      <div className={`${mainClass}__description-title`}>
        <h3>Uitleg Karakter Eigenschappen</h3>
      </div>
      <div className={`${mainClass}__description-descriptions`}>
        {allKeys.map((key, index) => renderCard(personalityCards[key], index))}
      </div>
    </div>
  );
};

export default PersonalitiesCards;
