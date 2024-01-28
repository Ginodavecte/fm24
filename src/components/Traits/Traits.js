import React from 'react';
import TraitsHeader from './TraitsHeader';

const Traits = () => {
  const mainClass = 'traits';

  return (
    <div className={ mainClass } id="traits">
      <TraitsHeader mainClass={mainClass} />
    </div>
  );
};


export default Traits;
