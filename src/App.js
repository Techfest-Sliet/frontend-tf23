import React from 'react';
import HomeScreen from './screens/landingPage/HomeScreen';
import Reset from './components/Signin/Signin'
import './index.css';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/signIn' element={<Reset/>}/>
      </Routes>
    </div>
  );
}

export default App;
