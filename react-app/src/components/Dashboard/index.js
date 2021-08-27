import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useHistory } from "react-router-dom";
import { getItineraries } from '../../store/itineraries'
import ItineraryForm from '../Itinerary/ItineraryForm';
import Itineraries from '../Itinerary/';
import './Dashboard.css'

const Dashboard = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItineraries());
    }, [dispatch, formSubmitted]);

    const submittedForm = () => {
        setFormSubmitted(!formSubmitted)
    }

    return (
        <>
            <div className="dashboard__outer-container">

                <h1>Welcome, [username]!</h1>
                <div className="dashboard__sidebar-outer-container">
                    <div className="dashboard__sidebar-header-container">
                        <button>create itinerary</button>
                    </div>
                    <div className="dashboard__sidebar-list-container">
                        <Itineraries />
                    </div>
                </div>
                <div className="dashboard__main-body-container">
                    <ItineraryForm submittedForm={submittedForm} />
                </div>

            </div>

        </>
    )
}

export default Dashboard;
