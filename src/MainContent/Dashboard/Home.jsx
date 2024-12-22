import React from 'react';
import './homeStyle.css';
import FooterBody from './FooterBody/Footer';
import 'flowbite';

const HomeBody = () => {

return (
<div>

  
    <div className="content">
        <div className="body-container">

            <div className="image-container">
                <img
                    src="/body-image.jpg"
                    alt="front page image for the Home"
                    
                className="body-image"  />
            </div>

            <div className="text-container">
                <h2>Nails Done Right.</h2>
                <p>Every detail considered, reimagined + improved.</p>
                <button className='button-60'>Learn More</button>
            </div>
        </div>
    </div>
        
   <div className="footer-body">
        <FooterBody />
   </div>
  

</div>
    );

};

export default HomeBody;