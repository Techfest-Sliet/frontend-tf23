import { Navbar } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import ContactUs from "./components/contactUs";
import React from 'react';
import Error404 from "./components/Error404/Error404";
import Reset from './components/Signin/Signin';
import './index.css';
import { Route, Routes } from 'react-router';
// import Domain from './screens/domain/Domain';
import DomainScreen from './screens/domain/DomainScreen';
import HomeScreen from './screens/landingPage/HomeScreen';
function App() {
  return (
  <>
  <Navbar/>
    <div className="App">
      <Routes>
        <Route path='/domain' element={<DomainScreen/>}/>
        {/* <Route path='/signIn' element={<Reset/>}/> */}
	<Route path="*" element={<Error404/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/signIn' element={<Reset/>}/>
      </Routes>
    </div>
  <Footer/>
  </>
  );
}

export default App;
