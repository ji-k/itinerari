import { useEffect } from 'react';
import { useDispatch } from "react-redux";
// import { NavLink, useParams } from 'react-router-dom';
import { getItineraries } from '../../store/itineraries';
import './itinerary.css'

const Itineraries = () => {

    // const itineraries = useSelector(state => state.itineraries)

    // const user = useSelector(state => state.session.user)
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
            {/* <div className="itineraries__outer-container"> */}

            {/* {Object.values(itineraries).map(itinerary => { */}
            {/* if (user.id === itinerary?.owner_id) */}
            {/*
            <div>

                id={itinerary.id}

                {itinerary.title}
            </div>) */}

            {/* } */}

            {/* </div> */}
        </>
    )
};

export default Itineraries


// {Object.values(itineraries).map(itinerary => {
//     if (user.id === itinerary?.owner_id)
//         return (
//             <div key={itinerary.id}
//                 // href={`/itineraries/${itinerary.id}`}
//                 id={itinerary.id}
//                 className="itineraries-link" >
//                 {itinerary.title}
//             </div>)
// })
// }
