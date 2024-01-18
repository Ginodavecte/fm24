import React from 'react';

const PersonalitiesIntroduction = ({ mainClass }) => {
  return (
    <div className={`${mainClass}__introduction`}>
      <h3>Introductie</h3>
      <div className={`${mainClass}__introduction--body`}>
        <div className="1">
          Elke speler heeft zijn eigen persoonlijkheid, en die persoonlijkheid heeft rechtstreeks invloed op meerdere wegen binnen de FM-simulatie.
        </div>
        <div className="2">
          <h4>Emoties </h4>
          <ul>
            <li>
              Ten eerste beïnvloedt het de emoties van een speler en zijn toekomstige doelen en houding ten opzichte daarvan. Geluk en toekomstplannen worden rechtstreeks beïnvloed door de persoonlijkheid van een speler.
            </li>
            <li>
              Er is ook een meer indirect effect dat persoonlijkheid heeft op het moreel van dat individu.
            </li>
          </ul>
        </div>
        <div className="3">
          <h4>Interacties</h4>
          <ul>
            <li>
              Persoonlijkheden hebben rechtstreeks invloed op andere mensen die die persoon tegenkomen. Daarom heeft de persoonlijkheid rechtstreeks invloed op de interacties en relaties van een individu met teamgenoten, coaches, de manager en de media.
            </li>
          </ul>
        </div>

        <div className="4">
          <h4>Spelerprestaties</h4>
          <ul>
            <li>
              De wedstrijdprestaties van een speler kunnen worden beïnvloed door zijn persoonlijkheid. Verschillende persoonlijkheden reageren op allerlei manieren op bepaalde situaties en kunnen de prestaties van een speler tijdens een wedstrijd of de “houding” en het “verlangen” in zijn prestaties maken of breken.
            </li>
            <li>
              Er is nog een indirect effect. De algehele persoonlijkheid van de ploeg en andere individuen binnen de wedstrijdploeg en hun persoonlijkheden kunnen de prestaties van een speler beïnvloeden. Op dezelfde manier kan het ook worden omgekeerd – waarbij de persoonlijkheid van een speler de prestaties van de ploeg op een wedstrijddag kan beïnvloeden. Dit is echter indirecter.
            </li>
            <li>
              Trainingsprestaties en trainingsvoortgang kunnen rechtstreeks worden beïnvloed door de persoonlijkheid van een speler. Hun persoonlijkheid kan hun prestaties op het trainingsveld belemmeren of verbeteren en hoe ze als speler in het algemeen groeien.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PersonalitiesIntroduction;