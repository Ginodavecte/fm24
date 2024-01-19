import React from 'react';
import { Link } from 'react-router-dom';

const CoachesAttributeNavigation = ({ allKeys, title }) => {
  return (
    <div className="navigation-title">
      <h3>{title}</h3>
      <div className="navigate-descriptions">
        <ul>
          {allKeys.map((key) => {
            return (
              <li key={key}>
                <Link to={`#${key}`} >{key}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CoachesAttributeNavigation;