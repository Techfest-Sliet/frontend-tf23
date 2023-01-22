import { Navbar } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import ContactUs from "./components/contactUs";
import React from 'react';
import Error404 from "./components/Error404/Error404";
import SignIn from './components/Signin/Signin';
import './index.css';
import { Route, Routes } from 'react-router';
// import Domain from './screens/domain/Domain';
import DomainScreen from './screens/domain/DomainScreen';
import HomeScreen from './screens/landingPage/HomeScreen';
import Workshop from './workshop/workshops';
import Reset from './components/resetPassword/resetPassword';
import Loading from './components/loading/Loading';
import ForgotPassword from './components/forgotPassword/forgotPassword';
function App() {
  return (
  <>
    <div className="App">
      <Navbar/>
      <Footer/>
      <Routes>
        <Route path='/domains' element={<DomainScreen/>}/>
        {/* <Route path='/signIn' element={<Reset/>}/> */}
	<Route path="*" element={<Error404/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/workshops' element={<Workshop/>}/>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/resetPassword' element={<Reset/>}/>
        <Route path='/loading' element={<Loading/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
