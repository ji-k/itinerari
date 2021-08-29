import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getItineraries, removeItinerary } from '../../store/itineraries'
import ItineraryForm from '../Itinerary/ItineraryForm';
import ItineraryPage from '../ItineraryPage/ItineraryPage';
import Itineraries from '../Itinerary/';
import CreateItineraryModal from '../CreateItineraryModal';
import './Dashboard.css'

const Dashboard = () => {

    const user = useSelector(state => state.session.user)
    const itineraries = useSelector((state) => Object.values(state.itineraries));
    // const itineraries = useSelector(state => state.itineraries)

    const [submittedForm, setSubmittedForm] = useState(false) // !!!!
    const [itineraryOn, setItineraryOn] = useState(false)
    const [number, setNumber] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        dispatch(getItineraries());
    }, [dispatch]);
    // }, [dispatch, formSubmitted]);

    // const submittedForm = () => {
    //     setFormSubmitted(!formSubmitted)
    // }

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
                    <h1>Welcome, {user.username}!</h1>
                    <div className="dashboard__sidebar-outer-container">
                        <div className="dashboard__sidebar-header-container">
                            {/* <button>create itinerary</button> */}
                            < CreateItineraryModal submittedForm={submittedForm} setSubmittedForm={setSubmittedForm} />
                            {/* < CreateItineraryModal /> */}

                        </div>
                        <div className="dashboard__sidebar-list-container" >
                            {/* <Itineraries /> */}
                            <div className="dashboard__sidebar-itinerary-button">
                                {/* {Object.values(itineraries).map(itinerary => { */}
                                {itineraries.map(itinerary => {
                                    if (user.id === itinerary?.owner_id)
                                        return (
                                            <>
                                                <div key={itinerary.id}
                                                    // onClick={showItinerary}
                                                    className="itineraries-link" >

                                                    <span
                                                        id={itinerary.id}
                                                        onClick={showItinerary}>
                                                        {itinerary.title}
                                                    </span>


                                                    {/* <div onClick={handleDelete}>Delete</div> */}
                                                    {itinerary?.owner_id === user.id && <button
                                                        className="itinerary-delete"
                                                        onClick={() => {
                                                            dispatch(removeItinerary(itinerary.id));
                                                            // history.push('/dashboard');
                                                            // window.location.reload(); // ! refactor this with a useState toggle
                                                        }}
                                                    >
                                                        delete
                                                    </button>}
                                                </div>
                                            </>
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
