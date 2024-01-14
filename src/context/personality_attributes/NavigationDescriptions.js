import React from 'react';
import { Link } from 'react-router-dom';
import "./AttributeDescriptions.css";

export default function NavigationDescriptions() {
  const mainUrl = '/player-personalities';

  return (
    <div className="navigate-descriptions">
      <ul>
        <li>
          <Link to={`${mainUrl}#table`} >Tabel</Link>
          <Link to={`${mainUrl}#ambitie`} >Ambitie</Link>
          <Link to={`${mainUrl}#determination`} >Determination</Link>
          <Link to={`${mainUrl}#loyalty`} >Loyalty</Link>
          <Link to={`${mainUrl}#pressure`} >Pressure</Link>
          <Link to={`${mainUrl}#proffesionalism`} >Proffesionalism</Link>
          <Link to={`${mainUrl}#sportmanship`} >Sportmanship</Link>
          <Link to={`${mainUrl}#temperament`} >Temperament</Link>
        </li>
      </ul>
    </div>
  );
};