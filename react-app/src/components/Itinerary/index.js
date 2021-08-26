import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getItineraries, getItinerary, updateItinerary, removeItinerary } from '../../store/itineraries';
import './itinerary.css'

const Itineraries = () => {
    const itineraries = useSelector(state => state.itineraries)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItineraries())
    }, [dispatch]);



    // const onChange = (e) => {
    //     setTitle(e.target.value);
    // };

    // const onDelete = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     dispatch(removeItinerary(itinerary.id));
    // };

    return (
        <>
            <h3>itinerary would appear here</h3>
        </>
    )
};

export default Itineraries;
