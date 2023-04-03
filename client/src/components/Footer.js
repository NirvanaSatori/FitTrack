import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h4 className="mb-4">Stay Connected with FitTrack</h4>
            <ul className="list-unstyled">
              <li>
                <span className="text-muted mr-2">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                +254-712-345-678-FITTRACK
              </li>
              <li>
                <span className="text-muted mr-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                support@fittrackapp.com
              </li>
              <li>31st Street, Anytown, Kenya</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="mb-4">About FitTrack</h4>
            <ul className="list-unstyled">
              <li>Track your fitness goals and progress</li>
              <li>Customizable workout plans</li>
              <li>Connect with other fitness enthusiasts</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="mb-4">Follow Us</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/fittrackapp/" target="_blank" rel="noreferrer" className="text-white">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/fittrackapp" target="_blank" rel="noreferrer" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/fittrackapp/" target="_blank" rel="noreferrer" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
