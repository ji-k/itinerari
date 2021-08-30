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
                    <p className="features-details">itinerari is a travel management app that allows users to create a single-page itinerary to organize and plan their travel logistics. itinerari hopes travelers can benefit from having their travel information conveniently all in one place, or to help with communication within a group of travelers.</p>
                    <div className="flex-center-me">
                        <div className="feature-1-container feature-points">
                            <img src="https://github.com/ji-k/itinerari/blob/main/assets/images/1.jpg?raw=true" className="feature-image" />
                            <p className="feature-points-details">Itineraries are fully customizable for a single traveler, or for small or large groups. </p>
                        </div>
                        <div className="feature-2-container feature-points">
                            <img src="https://github.com/ji-k/itinerari/blob/main/assets/images/2.jpg?raw=true" className="feature-image" />
                            <p className="feature-points-details">Add flight information for you or a group of travelers. Adding a passenger list is easy so you'll know who is flying where.</p>
                        </div>
                        <div className="feature-3-container feature-points">
                            <img src="https://github.com/ji-k/itinerari/blob/main/assets/images/11.jpg?raw=true" className="feature-image" />
                            <p className="feature-points-details">Add car rental information so you'll know exactly where to go to grab your car after leaving a hectic airport.</p>
                        </div>
                        <div className="feature-4-container feature-points">
                            <img src="https://github.com/ji-k/itinerari/blob/main/assets/images/9.jpg?raw=true" className="feature-image" />
                            <p className="feature-points-details">Add hotel information so you'll know exact dates of stay. Add a rooming list so you'll know who is staying where.</p>
                        </div>
                    </div>
                </div>
                <div className="landing-page__mid-banner-container">
                    <div className="travel-quote">Collect moments, not things.</div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;
