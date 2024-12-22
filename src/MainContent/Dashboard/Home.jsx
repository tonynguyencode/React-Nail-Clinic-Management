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
        
<<<<<<< HEAD
    <div className="footerBody">
        

        <div className="headerText">
            <h2>There's Nothing a Fresh Manicure Cannot Fix.</h2>
        </div>

        <div className="bodyButtons">
            <button className='button-30'>Book Appointment</button>
            <button className='button-30'>View Service Menu</button>
        </div>

        <div className="3-simpleText">
            <div className="contact">
                    
            </div>
            <div className="hours">

            </div>
            <div className="location">

            </div>
        </div>
  
    </div>

=======
   <div className="footer-body">
        <FooterBody />
   </div>
  
>>>>>>> b16b9632bd96d257fea465b0fcf888974ab7dc1b

</div>
    );

};

export default HomeBody;