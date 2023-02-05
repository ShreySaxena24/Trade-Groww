import React from 'react';

import { Navbar, Header } from './components';
import { Blog, CTA, Features, Possibility, WhatGPT3 } from './containers';

import './App.css';

const Home = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </div>
  </div>
);

export default Home;
