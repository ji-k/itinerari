import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useHistory } from "react-router-dom";
import { getItineraries } from '../../store/itineraries'
import ItineraryForm from '../Itinerary/ItineraryForm';
import Itineraries from '../Itinerary/';

const Dashboard = () => {
    const itineraries = useSelector(state => state.itineraries)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItineraries());
    }, [dispatch]);


    return (
        <>
            <h1>DASHBOARD TEST :)</h1>
            <ItineraryForm />
            <Itineraries />


        </>
    )
}

export default Dashboard;
