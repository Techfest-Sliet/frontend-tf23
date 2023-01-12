import React from 'react';
import HomeScreen from './screens/landingPage/HomeScreen';
import './index.css';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
