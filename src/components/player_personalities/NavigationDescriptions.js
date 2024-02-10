import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationDescriptions( { titles, slugs }) {
  const mainUrl = '/player-personalities';

  return (
    <div className="navigate-descriptions">
      <ul>
        <li>
          <Link to={`${mainUrl}#table`} >Tabel</Link>
          {
            titles.map((title, index) => (
              <Link key={index} to={`${mainUrl}#${slugs[index]}`} >{title}</Link>
            ))
          }
        </li>
      </ul>
    </div>
  );
};