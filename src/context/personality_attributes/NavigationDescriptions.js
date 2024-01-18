import React from 'react';
import { Link } from 'react-router-dom';
import "./AttributeDescriptions.scss";

export default function NavigationDescriptions() {
  const mainUrl = '/player-personalities';

  return (
    <div className="navigate-descriptions">
      <ul>
        <li>
          <Link to={`${mainUrl}#table`} >Tabel</Link>
          <Link to={`${mainUrl}#ambition`} >Ambitie</Link>
          <Link to={`${mainUrl}#determination`} >Determination</Link>
          <Link to={`${mainUrl}#loyalty`} >Loyalty</Link>
          <Link to={`${mainUrl}#pressure`} >Pressure</Link>
          <Link to={`${mainUrl}#proffesionalism`} >Proffesionalism</Link>
          <Link to={`${mainUrl}#sportsmanship`} >Sportsmanship</Link>
          <Link to={`${mainUrl}#temperament`} >Temperament</Link>
        </li>
      </ul>
    </div>
  );
};