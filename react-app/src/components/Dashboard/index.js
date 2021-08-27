import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useHistory } from "react-router-dom";
import { getItineraries } from '../../store/itineraries'
import ItineraryForm from '../Itinerary/ItineraryForm';
import Itineraries from '../Itinerary/';

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
            <h1>DASHBOARD TEST :)</h1>
            <ItineraryForm submittedForm={submittedForm} />
            <Itineraries />


        </>
    )
}

export default Dashboard;
