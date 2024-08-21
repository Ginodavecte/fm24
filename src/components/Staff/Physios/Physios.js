import React from 'react';
import './Physios.scss';
// import PhysiosTable from './PhysiosTable';
import PhysiosHeader from './PhysiosHeader';

const Physios = () => {
  const mainClass = 'physios';

  return (
    <div className={ mainClass } id="physios">
      <PhysiosHeader mainClass={mainClass} />
      {/*<PhysiosTable mainClass={mainClass} />*/}
    </div>
  );
};

export default Physios;