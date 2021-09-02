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
                            <img src="https://itinerari.s3.amazonaws.com/1.jpg" className="feature-image" alt="man at waterfall" />
                            <div className="feature-point-header">Customizable</div>
                            <p className="feature-points-details">Itineraries are fully customizable for a single traveler, or for small or large groups. </p>
                        </div>
                        <div className="feature-2-container feature-points">
                            <img src="https://itinerari.s3.amazonaws.com/2.jpg" className="feature-image" alt="clouds outside of an airplane window" />
                            <div className="feature-point-header">Flight Details</div>
                            <p className="feature-points-details">Know when you will be in the air. Add a passenger list for your inbound and outbound flights.</p>
                        </div>
                        <div className="feature-3-container feature-points">
                            <img src="https://itinerari.s3.amazonaws.com/11.jpg" className="feature-image" alt="black car at night" />
                            <div className="feature-point-header">Rental Car Details</div>
                            <p className="feature-points-details">Know exactly where to go to pick up your rental car after leaving a hectic airport.</p>
                        </div>
                        <div className="feature-4-container feature-points">
                            <img src="https://itinerari.s3.amazonaws.com/9.jpg" className="feature-image" alt="ocean view hotel balcony" />
                            <div className="feature-point-header">Hotel Details</div>
                            <p className="feature-points-details">Know where you'll be staying. Add a rooming list if your group is staying in multiple properties.</p>
                        </div>
                    </div>
                </div>
                <div className="landing-page__mid-banner-container">
                    <div className="travel-quote">Collect moments, not things.</div>
                </div>
                <div className="landing-page__about-me-inner-container">
                    <div className="landing-page__about-me-container">
                        <div className="landing-page__about-me-left-container">
                            {/* <div className="made-with">Made with:</div> */}
                            <div className="made-with">Made with: JavaScript, React-Redux, Python, Flask, SQLAlchemy, PostgreSQL, Node.js</div>
                            {/* <p className="about">Created by <strong>Ji Kyung</strong></p>
                            <p className="about">jikyung@gmail.com</p>
                            <p><a href="www.linkedin.com/in/jikyung" className="about">LinkedIn</a></p>
                            <p><a href="https://github.com/ji-k" className="about">GitHub</a></p> */}
                        </div>
                        <div className="landing-page__about-me-right-container">
                            <p className="about">Created by <strong>Ji Kyung</strong></p>
                            <p className="about">jikyung@gmail.com</p>
                            <p><a href="https://www.linkedin.com/in/jikyung" className="about">LinkedIn</a></p>
                            <p><a href="https://www.github.com/ji-k" className="about">GitHub</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;
