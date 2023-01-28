import './index.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Navbar } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactUs from "./components/contactUs/contactUs.js";
import Chemfor from "./components/Events/Chemfor/Chemfor.js";
import Electrica from "./components/Events/Electrica/Electrica.js";
import Genesis from "./components/Events/Genesis/Genesis.js";
import Karyarachna from "./components/Events/Karyarachna/Karyarachna.js";
import Kermis from "./components/Events/Kermis/Kermis.js";
import Mechanica from "./components/Events/Mechanica/Mechanica.js";
import Plexus from "./components/Events/Plexus/Plexus.js";
import Robozar from "./components/Events/Robozar/Robozar.js";
import Faq from './components/faq/faq.js';
import Error404 from "./components/Error404/Error404";
import SignIn from './components/Signin/Signin';
import DomainScreen from './screens/domain/Domain.jsx';
import OneDomain from './components/domain/OneDomain.jsx';
import HomeScreen from './screens/landingPage/HomeScreen';
import Workshop from './workshop/workshops';
import Reset from './components/resetPassword/resetPassword';
import Loading from './components/loading/Loading';
import UnderConstruction from './components/Construction/underConstruction.js';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import Register from './components/Register/Register';
function App() {
  
  return (
  <>
    <div className="App">
      <Navbar/>
      <Register/>
      <Footer/>
      <Routes>
        <Route path='/domains' element={<DomainScreen/>}/>
	<Route path="*" element={<Error404/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/events/chemfor' element={<Chemfor/>}/>
        <Route path='/events/electrica' element={<Electrica/>}/>
        <Route path='/events/genesis' element={<Genesis/>}/>
        <Route path='/events/karyarachna' element={<Karyarachna/>}/>
        <Route path='/events/kermis' element={<Kermis/>}/>
        <Route path='/events/mechanica' element={<Mechanica/>}/>
        <Route path='/events/plexus' element={<Plexus/>}/>
        <Route path='/events/robozar' element={<Robozar/>}/>
        <Route path='/workshops' element={<Workshop/>}/>
        <Route path='/underConstruction' element={<UnderConstruction/>}/>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/domain/:title' element={<OneDomain/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/resetPassword' element={<Reset/>}/>
        <Route path='/loading' element={<Loading/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        {/* <Route path='/events' element={<Event/>}/> */}
      </Routes>
    </div>
  </>

  );
}

export default App;
