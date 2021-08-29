import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import EditItineraryModal from '../EditItineraryModal';
import './ItineraryPage.css'

export default function Profile({ number }) {


    const itineraries = Object.values(useSelector(state => state.itineraries))
    const itinerary = itineraries.filter(itinerary => (
        itinerary?.id == number
    ))

    console.log("4829048239420348", itinerary)
    return (
        <>
            < EditItineraryModal itinerary={itinerary} />
            <div className="itinerary-page__outer-container">
                <p>Title: {itinerary[0]?.title}</p>
                <p>Trip Start: {itinerary[0]?.start_date}</p>
                <p>Trip End: {itinerary[0]?.end_date}</p>
                <p>Banner: {itinerary[0]?.image_url}</p>
                <p>Notes: {itinerary[0]?.notes}</p>

                <p>Airline: {itinerary[0]?.flight_info[0]?.airline}</p>

            </div>
        </>
    )
}
