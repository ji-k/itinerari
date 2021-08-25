import { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteItinerary } from '../../store/boards';

function ItinerarySheet() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [Title, setTitle] = useState(itinerary.title);

    const onChange = () => {
        setTitle(e.target.value);
    };

    const onDelete = () => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(deleteItinerary(itinerary.id));
    };

    return (
        <>
            <h1>hello</h1> {itinerary.title}
        </>
    )
};

export default ItinerarySheet;
