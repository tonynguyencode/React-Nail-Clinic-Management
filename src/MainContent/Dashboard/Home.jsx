import React from 'react';
import './homeStyle.css';
import FooterBody from './FooterBody/Footer';

import { StyledEngineProvider } from '@mui/material/styles';

import ImageCard1 from './Card/flowerNail';
import ImageCard2 from './Card/Linda';
import ImageCard3 from './Card/john-Nail';

import appointRequest from '../AppointmentPage/customer';

const HomeBody = () => {

return (
<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

  
    
    <main style={{ flex: 1 }}>

        <div className="body-container">
            <div className="image-container">
                <img
                    src="/body-image.jpg"
                    alt="front page image for the Home"
                    
                className="body-image"  />
            </div>

            <div className="image-container">
                <img
                    src="/nailBodyimage.jpg"
                    alt="front page image for the Home"
                    
                className="body-image body-changed"  />
            </div>


            <div className="text-container">
                <h2>Nails Done Right.</h2>
                <p>Every detail considered, reimagined + improved.</p>
                <button className='button-60'>Learn More</button>
            </div>


        </div>

        <div className="image-card">
            <div className='card'>
            <StyledEngineProvider injectFirst>
                <ImageCard1 />
            </StyledEngineProvider>
            </div>
            <div className='card'>
            <StyledEngineProvider injectFirst>
                <ImageCard2 />
            </StyledEngineProvider>
            </div>
            <div className='card'>
            <StyledEngineProvider injectFirst>
                <ImageCard3 />
            </StyledEngineProvider>
            </div>

        </div>
    </main>

        <footer>
            <div> 
                <FooterBody />
            </div>
        </footer>
        
        
        
       

    
        

   
  

</div>
    );

};

export default HomeBody;