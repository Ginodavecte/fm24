import React from 'react';
import './Layout.scss';

const TopBar = ( {title, icon} ) => {

  return (
    <div className="top-bar">
      <h2>
        {icon} {title}
      </h2>
    </div>
  );
}

export default TopBar;