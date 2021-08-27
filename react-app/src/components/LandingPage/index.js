import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {

    const history = useHistory();
    const getStarted = () => {
        let path = `/dashboard`;
        history.push(path);
    }

    return (
        <>
            <div className="landing-page__outer-container">
                <p>Create informative, single-page itineraries</p>
                <p>TRAVEL SMARTER</p>
                <button onClick={getStarted} className="getStarted-button">Get Started</button>
            </div>
        </>
    )
}

export default LandingPage;
