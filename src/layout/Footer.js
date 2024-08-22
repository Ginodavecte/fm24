import React from 'react';
import './Layout.scss';

const Footer = () => {

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__title">
          Quick Links
        </div>
        <div className="footer__content">
          <ul>
            <li>
              <a href="https://fmcalc.com" target="_blank" rel="noreferrer">Calculator</a>
            </li>
            <li>
              <a href="https://www.fmscout.com/a-football-manager-2024-wonderkids.html" target="_blank"
                 rel="noreferrer">
                Wonderkids
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;