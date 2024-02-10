import React, { useEffect, useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import PersonalitiesTable from './PersonalitiesTable';
import PersonalitiesHeader from './PersonalitiesHeader';
import "./PlayerPesronalities.scss";
import PersonalitiesCards from './PersonalitiesCards';
import api from '../../api/dbTest';

const PlayerPersonalities = () => {
  const mainClass = 'player-personalities';
  const [playerPersonalities, setPlayerPersonalities] = useState([]);
  const [personalityCards, setPersonalityCards] = useState([]);
  const [allKeys, setAllKeys] = useState([]);
  const [allSlugs, setAllSlugs] = useState([]);

  // Retrieve personalityCards
  const retrievePersonalitiesCards = async () => {
    const response = await api.get("/playerPersonalities");
    return response.data;
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPersonalitiesCards = await retrievePersonalitiesCards();
        if (allPersonalitiesCards && allPersonalitiesCards.personalityAttributes) {
          const attributes = allPersonalitiesCards.personalityAttributes;
          const keysArray = Object.keys(attributes);
          setPersonalityCards(attributes);
          setAllKeys(keysArray);
          setPlayerPersonalities(allPersonalitiesCards);

          // Extract slugs from attributes and filter out duplicates
          const newSlugs = keysArray.map(index => attributes[index].slug);
          setAllSlugs(prevState => [...new Set([...prevState, ...newSlugs])]);
        }
      } catch (error) {
        console.error('Error fetching personality attributes:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className={mainClass}>
      <PersonalitiesHeader mainClass={ mainClass } />
      <PersonalitiesTable mainClass={ mainClass }
                          playerPersonalities={playerPersonalities}
      />
      <PersonalitiesCards mainClass={ mainClass }
                          personalityCards={personalityCards}
                          allKeys={allKeys}
                          allSlugs={allSlugs}
      />
    </div>
  );
};


export default PlayerPersonalities;
