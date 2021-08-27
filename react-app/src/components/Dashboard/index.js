import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useHistory } from "react-router-dom";
import { getItineraries } from '../../store/itineraries'
import ItineraryForm from '../Itinerary/ItineraryForm';
import ItineraryPage from '../ItineraryPage/ItineraryPage';
import Itineraries from '../Itinerary/';
import './Dashboard.css'

const Dashboard = () => {

    const user = useSelector(state => state.session.user)

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [itineraryOn, setItineraryOn] = useState(false)
    // const [itineraryOff, setItineraryOff] = useState(true)
    const [number, setNumber] = useState('')
    const dispatch = useDispatch();

    const itineraries = useSelector(state => state.itineraries)




    useEffect(() => {
        dispatch(getItineraries());
    }, [dispatch, formSubmitted]);

    const submittedForm = () => {
        setFormSubmitted(!formSubmitted)
    }

    const showItinerary = (e) => {
        setNumber(e.target.id)
        setItineraryOn(true)
    }

    // const hideItinerary = (e) => {
    //     setItineraryOn(!itineraryOn)
    //     setNumber(e.target.id)
    //     console.log("--------------------")
    // }


    return (
        <>
            <div className="dashboard__outer-container">

                <div className="dashboard__inner-container">
                    <h1>Welcome, {user.username}!</h1>
                    <div className="dashboard__sidebar-outer-container">
                        <div className="dashboard__sidebar-header-container">
                            <button>create itinerary</button>
                        </div>
                        <div className="dashboard__sidebar-list-container" >
                            {/* <Itineraries /> */}
                            {Object.values(itineraries).map(itinerary => {
                                // if (user.id === itinerary?.owner_id)
                                return (
                                    <div key={itinerary.id}
                                        onClick={showItinerary}
                                        id={itinerary.id}
                                        className="itineraries-link" >
                                        {itinerary.title}
                                    </div>)
                            })
                            }
                        </div>
                    </div>
                    <div className="dashboard__main-body-container">
                        <ItineraryForm submittedForm={submittedForm} />
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
