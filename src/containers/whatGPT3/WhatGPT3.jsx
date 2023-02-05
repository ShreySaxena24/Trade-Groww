import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About Us" text="TradeGroww aims to educate the youth about the various financial instruments through streak-based learning." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Learn" text="Learn about the fundamentals of stock market without investing much time." />
      <Feature title="Invest" text="Use the website as the mock investing platform to gain experience without any risk involved." />
      <Feature title="Earn" text="Implement the knowledge you gained in the real-world and earn rewards using the platform's streak based-learning." />
    </div>
  </div>
);

export default WhatGPT3;
