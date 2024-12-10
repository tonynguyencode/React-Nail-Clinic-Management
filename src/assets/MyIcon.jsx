import React from 'react';
import LoginPage from '../MainContent/LoginForm/Login';
import { Link } from 'react-router-dom';

import {Routes, Route, Router} from 'react-router-dom';

const MyIcon = () => {
    return (
        <svg  width="43px" height="27px"  stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"

        
        >
        <path  d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        
        > </path>

        <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"


        >
        </path>

        </svg>



    );

};



const Icon = () => {
    return (
        <div>
            <MyIcon />
        </div>
        
    );
};


export default Icon;