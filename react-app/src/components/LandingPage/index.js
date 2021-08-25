import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {

    const history = useHistory();
    const getStarted = () => {
        let path = `/itineraries`;
        history.push(path);
    }

    return (
        <>
            <h1>LANDING PAGE TEST</h1>
            <h2>Create Your Itineraries using Itinerari</h2>
            <h3>Itinerari makes it easy to travel in large groups.</h3>
            <h4>Build informative, one-page itineraries that blahblahblah</h4>

            When you click on this button, it will take you to the itineraries dashboard when logged in. If not, it will take you to the login page:
            <button onClick={getStarted} className="getStarted-bttn">Get Started</button>
        </>
    )
}

export default LandingPage;
