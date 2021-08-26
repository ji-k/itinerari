import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useHistory } from "react-router-dom";
import ItineraryForm from '../Itinerary/ItineraryForm';

const Dashboard = () => {


    return (
        <>
            <h1>DASHBOARD TEST :)</h1>
            <ItineraryForm />
        </>
    )
}

export default Dashboard;
