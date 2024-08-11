import React, { useEffect, useState } from 'react';
import db from '../../../../database/db.json';
import CoachesAttributeNavigation from './CoachesAttributeNavigation';

const CoachesAttributeDescription = ({ mainClass }) => {
  const [coachAttributes, setCoachAttributes] = useState([]);
  const [coachesData, setCoachesData] = useState([]);
  const [allKeys, setAllKeys] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const coachAttributesObject = db.coaches;
        if (coachAttributesObject && coachAttributesObject.attributes) {
          setCoachAttributes(coachAttributesObject.attributes);
        }

        // Extract and set all keys in an array
        const keysArray = Object.keys(coachAttributesObject.attributes);
        setAllKeys(keysArray);

      } catch (error) {
        console.error('Error fetching coach attributes:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Function to extract values and update state
    const extractValues = (attributes) => {
      const coachesArray = Object.keys(attributes).map((key) => {
        const attribute = attributes[key];
        return {
          title: key,
          description: attribute.description || '',
          keyTactical: attribute.keyTactical || '',
          keyTechnical: attribute.keyTechnical || '',
          outro: attribute.outro || '',
        };
      });

      setCoachesData(coachesArray);
    };

    // Call the function with your initial data
    if (coachAttributes) {
      extractValues(coachAttributes);
    }
  }, [coachAttributes]);


  return (
    <div className={`${mainClass}__attributes`}>
      {coachesData.map((coach, index) => (
        <div className="coach-card" key={index} id={coach.title}>
          <CoachesAttributeNavigation mainClass={mainClass} allKeys={allKeys} title={coach.title} />
          <p className="attribute">{coach.description ? `${coach.description}` : ''}</p>
          <p className="attribute">{coach.keyTactical ? `Key Tactical: ${coach.keyTactical}` : ''}</p>
          <p className="attribute">{coach.keyTechnical ? `Key Technical: ${coach.keyTechnical}` : ''}</p>
          <p className="attribute">{coach.outro ? `${coach.outro}` : ''}</p>
        </div>
      ))}
    </div>
  );
};

export default CoachesAttributeDescription;
