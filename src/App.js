import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
