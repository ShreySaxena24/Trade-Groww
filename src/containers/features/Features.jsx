import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Systematic Investment Plan(SIP)',
    text: 'A Systematic Investment Plan (SIP), more popularly known as SIP, is a facility offered by mutual funds to the investors to invest in a disciplined manner.',
  },
  {
    title: 'Income Tax Return(ITR)',
    text: 'Income Tax Return (ITR) is a form which a person is supposed to submit to the Income Tax Department of India. It contains information about the person\'s income and the taxes to be paid on it during the year.',
  },
  {
    title: 'Stock Trading',
    text: 'Stock trading means buying and selling shares in companies to try to make money on price changes. Traders watch the short-term price changes of these stocks closely. They try to buy low and sell high.',
  },
  {
    title: 'Nifty 50',
    text: 'The NIFTY 50 is a benchmark Indian stock market index that represents the weighted average of 50 of the largest Indian companies listed on the National Stock Exchange.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
