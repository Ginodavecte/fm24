import React, { useEffect, useState } from 'react'
import TraitsHeader from './TraitsHeader';
import TraitsTable from './TraitsTable';
import db from '../../database/db.json';

const Traits = () => {
  const mainClass = 'traits';
  let [traits, setTraits] = useState([]);
  let [traitsIntroduction, setTraitsIntroduction] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const traitsObject = db.traits;

        // Retrive the introduction and set it as a title
        if (traitsObject && traitsObject.introduction) {
          setTraitsIntroduction(traitsObject.introduction);
        }

        // Retrive the traits
        if (traitsObject && traitsObject.traits) {
          setTraits(traitsObject.traits);
        }

      } catch (error) {
        console.error('Error fetching traits:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={ mainClass } id="traits">
      <TraitsHeader mainClass={mainClass} introduction={traitsIntroduction} />
      <TraitsTable mainClass={mainClass} traits={traits} />
    </div>
  );
};


export default Traits;
