import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/home' component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
