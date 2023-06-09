import React from 'react';

import { Footer, Blog, Possibility, Features, GPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <GPT3 />
    <div className='gradient__bg-features'><Features /></div>
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
