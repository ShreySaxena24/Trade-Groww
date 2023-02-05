import React from 'react';
import possibilityImage from '../../assets/possibilityImage.jpeg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>When you invest in the stock of a company it means you own a share in the company that issued the stock. Stocks investment is a way to invest in some of the most successful companies. Companies use stocks as a way to raise money to fund growth, new products, and other important initiatives.</p>
      {/* <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default Possibility;
