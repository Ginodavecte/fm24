import React from "react";
import { Link } from 'react-router-dom';
import { FaHeadSideVirus } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { GrUserManager } from "react-icons/gr";

const Overview = () => {
  return (
    <div className="overview">
      <ul className="overview__list">
        <li className="overview__list--item">
          <Link to="/player-personalities">
            <FaHeadSideVirus />
            Karaktar (Player Personalities)
          </Link>
        </li>
        <li className="overview__list--item">
          <Link to="/scouts">
            <HiSearch />
            Scouts
          </Link>
        </li>
        <li>
          <Link to="/coaches">
            <GrUserManager />
            Coaches
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Overview;