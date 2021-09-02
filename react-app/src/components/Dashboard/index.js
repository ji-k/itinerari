import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getItineraries, removeItinerary } from '../../store/itineraries'
// import ItineraryForm from '../Itinerary/ItineraryForm';
import ItineraryPage from '../ItineraryPage/ItineraryPage';
// import Itineraries from '../Itinerary/';
import CreateItineraryModal from '../CreateItineraryModal';
import './Dashboard.css'

const Dashboard = () => {

    const user = useSelector(state => state.session.user)
    const itineraries = useSelector((state) => Object.values(state.itineraries));
    // const itineraries = useSelector(state => state.itineraries)

    const [itineraryOn, setItineraryOn] = useState(false)
    const [number, setNumber] = useState('')
    // const [reloader, setReloader] = useState(true)
    // const [formHidden, setFormHidden] = useState(true)

    const dispatch = useDispatch();
    // const history = useHistory();


    useEffect(() => {
        dispatch(getItineraries());
    }, [dispatch]);

    const showItinerary = (e) => {
        setNumber(e.target.id)
        setItineraryOn(true)
    }

    // const handleDelete = () => {
    //     dispatch(removeItinerary(id));
    //     history.push('/')
    // };

    return (
        <>
            <div className="dashboard__outer-container">

                <div className="dashboard__inner-container">
                    <h1 className="welcome-msg">Welcome, {user.username}!</h1>
                    <div className="dashboard__sidebar-outer-container">
                        <div className="dashboard__sidebar-header-container">
                            {/* <button>create itinerary</button> */}
                            < CreateItineraryModal />
                            {/* < CreateItineraryModal /> */}

                        </div>
                        <div className="dashboard__sidebar-list-container" >
                            {/* <Itineraries /> */}
                            <div className="dashboard__sidebar-itinerary-button">
                                {/* {Object.values(itineraries).map(itinerary => { */}
                                {itineraries.map(itinerary => {
                                    if (user.id === itinerary?.owner_id)
                                        return (
                                            <div key={itinerary.id}
                                                className="itineraries-link" >
                                                <span
                                                    id={itinerary.id}
                                                    onClick={showItinerary}>
                                                    {itinerary.title}
                                                </span>
                                                {itinerary?.owner_id === user.id && <button
                                                    className="itinerary-delete"
                                                    onClick={() => {
                                                        dispatch(removeItinerary(itinerary?.id));
                                                    }}
                                                >
                                                    Delete
                                                </button>}
                                            </div>
                                        )
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="dashboard__main-body-container">
                        {/* <ItineraryForm submittedForm={submittedForm} /> */}
                        {itineraryOn ?
                            <ItineraryPage number={number} />
                            : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
