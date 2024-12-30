import logo from './logo.svg';
import './App.css';


import HomeBody from './MainContent/Dashboard/Home';
import LoginPage from './MainContent/LoginForm/Login';
import Icon from './assets/MyIcon';
import SignUpPage from './MainContent/SignUpForm/signup';

import AppointmentPage from './MainContent/AppointmentPage/admin';

import FullPage from './MainContent/AppointmentPage/customer';
import Appointment from './MainContent/AppointmentPage/appointmentPage';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';



const App = () =>  {
  return (
  
  <BrowserRouter>
    
    <div className="App">

      <header className="App-header">

        <div className="store-name">
          <button class="button" data-text="Awesome">
            <span class="actual-text">VIP&nbsp;Nails&nbsp;</span>
            <span aria-hidden="true" class="hover-text">VIP&nbsp;Nails&nbsp;</span>
          </button>
        </div>

        <div>
            <nav className='navbar'>
              <Link to="/home" className='nav-link'><p>Home</p></Link>
              <Link to="/technician" className='nav-link'><p>Technician</p></Link>
              <Link to="/model" className='nav-link'><p>Model</p></Link>
              <Link to="/appointment" className='nav-link'><p>Appointment</p></Link>
              <Link to="/login" className='nav-link'>
                  <Icon />
              </Link>
            </nav>
        </div>
        
      </header>

      <main className="content">
        {/* Render Body part for "/" */}
        <Routes>

          <Route path="/" element={<HomeBody />} />

          <Route path="/home" element={<HomeBody />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/appointment" element={<Appointment />} />

          <Route path="/model" element={<FullPage />} />

        </Routes>


        {/* Render Body part for "/login" */}
        

      </main>
      
      

    </div>

   
  </BrowserRouter>
  
  );
  
};






export default App;
