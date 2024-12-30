import React, {useState} from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  {/*
    Initial user State: {name: "", username: "", password:"", phoneNumber:"" }
    
    */}
    const[user, setUser] = useState({
      fullName: "", username: "", password:"", phoneNumber:"" 
    });


  {/* handleInputChange 
    it captures the value entered into an input field by accessing the event.target.value
    it determines which input field

    e.target.name : the name of the input field
    e.target.value: the value entered into the input field
    Create a new user object with the updated field while preserving the existing
    values for other field

    */}

    const handleInputChange = (e) => {
      const {name, value} = e.target;
      setUser({...user, [name]: value})
    };

    //Check if any input field is empty
    const isFormValid = Object.values(user).every((value) => value.trim() !== "");

    const handleSubmit = (e) => {
      e.preventDefault();
      if(isFormValid){
        console.log("Form submitted");
      } else{
        alert("Form is incomplete!");
      }
    }

  {/* saveUser function
    
    */}
    const token = localStorage.getItem("authToken");

    const saveUser = async () => {


      try {
        const response = await fetch("http://localhost:8080/auth/customerSignup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if(!response.ok){
          //Log response status and message for better debugging
          const errorText = await response.json();
          throw new Error(`Failed to save user: ${response.status} - ${errorText}`);
        };

        const data = await response.json(); //Read the response as text
        
        console.log("Response data:",data);  //the response is converted to text, and this line is to display
                      // the backend's response message in a simple alert dialog
        //Redirect
        navigate("/home")
      } catch (error){
        console.error("error saving user: ", error);
      };


    };




  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)',
     height:'100vh'
    }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px', backgroundColor:'lavender'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' name='fullName'  value={user.fullName} onChange={handleInputChange}  />
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' name='username' value={user.username} onChange={handleInputChange}  />
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' name='password' value={user.password} onChange={handleInputChange}  />
          <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form4' type='tel' name='phoneNumber' value={user.phoneNumber} onChange={handleInputChange} />
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={saveUser}  type="submit" disabled={!isFormValid}  >Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default App;
