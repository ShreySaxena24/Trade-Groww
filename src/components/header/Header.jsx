import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s learn something new today</h1>
      <p>TradeGroww aims to educate the youth about the various financial instruments through streak-based learning.</p>
      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people are currently learning through us</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
