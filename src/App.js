
// import ContactUs from "./components/contactUs";
// import Workshops from "./components/workshop/workshops"
// import DataOfWorkshop from "./components/workshop/DataOfWorkshop";
import Loading from "./components/loading/Loading";
import React from 'react';
import HomeScreen from './screens/landingPage/HomeScreen';
import Reset from './components/Signin/Signin'
import './index.css';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loading/>}/>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/signIn' element={<Reset/>}/>
      </Routes>
    </div>
  );
}

export default App;
