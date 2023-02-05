import React from 'react';
import './cta.css';
import { Link } from 'react-router-dom';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button">
        <Link to="/signup">Get Started</Link>
      </button>
    </div>
  </div>
);

export default CTA;
