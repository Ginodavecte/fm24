import React, { useEffect, useState } from 'react';
import api from '../../api/dbTest';
import { VscReferences } from 'react-icons/vsc';
import './References.scss';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import TopBar from '../../layout/TopBar';
const References = () => {
  const mainClass = 'references';
  let [references, setReferences] = useState([]);
  let [referencesIntroduction, setReferencesIntroduction] = useState([]);

  const retrieveReferences = async() => {
    const response = await api.get("/references");
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const referencesObject = await retrieveReferences();

        // Retrive the introduction and set it as a title
        if (referencesObject && referencesObject.introduction) {
          setReferencesIntroduction(referencesObject.introduction);
        }

        // Retrive the subjects
        if (referencesObject && referencesObject.subjects) {
          setReferences(referencesObject.subjects);
        }

      } catch (error) {
        console.error('Error fetching references:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={mainClass}>

      <div className={`${mainClass}__header`}>
        <TopBar icon={<VscReferences />} title="References" />
        <div className={`${mainClass}__introduction`}>
          <p>{referencesIntroduction}</p>
        </div>
      </div>

      <div className={`${mainClass}__content`}>
        <h3>Onderwerpen</h3>
        {ReferencesSubjects(references, mainClass)}
      </div>
    </div>
  );
};

export default References;


function ReferencesSubjects(subjects, mainClass) {
  if (Object.keys(subjects).length > 0) {
    mainClass = `${mainClass}__subjects`;

    return (
      <div className={`${mainClass}`}>
        {Object.keys(subjects).map(index => {
          const subject = subjects[index];
          const subjectTitle = subject.title ?? 'Geen onderwerp titel';

          return (
            <div className={`${mainClass}__subject`} key={index} id={index}>
              <div className={`${mainClass}__subject--header`}>
                <h4>{subjectTitle}</h4>
              </div>
              {subject.sources &&
                subject.sources.map((source, sourceIndex) => (
                  <div className={`${mainClass}__subject--source`} key={sourceIndex}>
                    <div className={`${mainClass}__subject--source-header`}>
                      <h5>{source.title ?? 'Geen bron titel'}</h5>
                      <p>{source.description ?? 'Geen bron beschrijving'}</p>
                    </div>
                    <div className={`${mainClass}__subject--source-button`}>
                      <a className="button" href={source.source ?? '#'} target="_blank">
                        <FaExternalLinkSquareAlt /> {source.sourceDescription ?? 'Geen bron link titel'}
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    );
  }

  return <div>Geen onderwerpen gevonden</div>;
}
