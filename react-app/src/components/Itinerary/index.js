import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getItinerary, getItineraries, updateItinerary, removeItinerary } from '../../store/itineraries';
import './itinerary.css'

function Itinerary() {
    const itinerary = useSelector(state => state.itinerary)
    const [title, setTitle] = useState('');

    const dispatch = useDispatch()
    const { itineraryId } = useParams();

    useEffect(() => {
        dispatch(getItinerary(itineraryId))
    }, [dispatch, itineraryId]);



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

export default Itinerary;
