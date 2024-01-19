import React from 'react';
import './Scouts.scss';
import ScoutsTable from './ScoutsTable';
import ScoutsHeader from './ScoutsHeader';

const Scouts = () => {
  const mainClass = 'scouts';

  return (
    <div className={ mainClass } id="scouts">
      <ScoutsHeader mainClass={mainClass} />
      <ScoutsTable mainClass={mainClass} />
    </div>
  );
};

export default Scouts;