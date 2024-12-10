import logo from './logo.svg';
import './App.css';


import HomeBody from './MainContent/Dashboard/Home';
import LoginPage from './MainContent/LoginForm/Login';
import Icon from '../src/assets/MyIcon';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




const App = () =>  {
  return (
  
  <BrowserRouter>
    
    <div className="App">

      <header className="App-header">
        <div className="store-name">VIP Nails</div>
        <div>
            <nav className='navbar'>
              <Link to="/home" className='nav-link'>Home</Link>
              <Link to="/technician" className='nav-link'>Technician</Link>
              <Link to="/model" className='nav-link'>Model</Link>
              <Link to="/appointment" className='nav-link'>Appointment</Link>
              <Link to="/login">
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


        </Routes>


        {/* Render Body part for "/login" */}
        

      </main>
      
      

    </div>

   
  </BrowserRouter>
  
  );
  
};






export default App;
