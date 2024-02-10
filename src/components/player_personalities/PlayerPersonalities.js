import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import PersonalitiesTable from './PersonalitiesTable';
import PersonalitiesHeader from './PersonalitiesHeader';
import "./PlayerPesronalities.scss";
import PersonalitiesCards from './PersonalitiesCards';

const PlayerPersonalities = () => {
  const mainClass = 'player-personalities';

  return (
    <div className={mainClass}>
      <PersonalitiesHeader mainClass={ mainClass } />
      <PersonalitiesTable mainClass={ mainClass } />
      <PersonalitiesCards mainClass={ mainClass } />
    </div>
  );
};


export default PlayerPersonalities;
