import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <Navbar />
      </Wrapper>
    </div>
  );
}

export default App;
