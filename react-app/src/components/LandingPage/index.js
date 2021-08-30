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
                <div className="landing-page__header-container">
                    <p className="tag-line">Create informative, single-page itineraries</p>
                    <p className="travel-smarter">TRAVEL SMARTER</p>
                    <button onClick={getStarted} className="getStarted-button">Get Started</button>
                </div>
                <div className="landing-page__features-container">
                    <p className="features">Features</p>
                    <p className="features-details">itinerari is a travel management app that allows users to create a single-page itinerary to organize and plan their travel logistics. Itineraries are fully customizable for a single traveler, or for small or large groups. </p>
                </div>
            </div>
        </>
    )
}

export default LandingPage;
