import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useHistory } from "react-router-dom";
import { getItineraries } from '../../store/itineraries'
import ItineraryForm from '../Itinerary/ItineraryForm';
import Itineraries from '../Itinerary/';
import './Dashboard.css'

const Dashboard = () => {
    const itineraries = useSelector(state => state.itineraries)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItineraries());
    }, [dispatch]);


    return (
        <>
            <div className="side-bar__outer-container">
                purple me
            </div>
        </>
    )
}

export default Dashboard;
