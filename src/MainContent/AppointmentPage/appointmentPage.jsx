import React from 'react';
import  {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import './appointmentPage.css';

function App() {

  {/*
     user State: {appointmentDate: "", status: "", note:"", customer_id:"", technician_id:"" }
    
    */}

  const[appointment, setAppointment] = useState({


  });





  return (
    <MDBContainer fluid  style={{width: "100%", height: "60vh", backgroundColor:"ghostwhite"}}      >

      <MDBRow className='d-flex justify-content-center align-items-center h-100 '>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: "700px", minHeight: "600px"}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Appoinment Booking</h2>
              <p className="text-white-50 mb-5">Book your appointment today!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Date' id='formControlLg' type='date' size="lg"/>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Time' id='formControlLg' type='time' size="lg"/>

              
              <MDBBtn outline className='mx-2 px-5 text-white-50 fw-bold' color='white' size='lg'>
                Book Your Appointment
              </MDBBtn>

              {/* Calendar to pick the date */}
              
              {/* time */}

              {/* technician */}  


              
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;