import React from 'react'
import { useSelector } from "react-redux";
import EditItineraryModal from '../EditItineraryModal';
import './ItineraryPage.css'

export default function Profile({ number }) {
    const itineraries = useSelector(state => state.itineraries)
    // const itineraries = Object.values(useSelector(state => state.itineraries))
    const itinerary = itineraries[number]
    // const itinerary = itineraries.filter(itinerary => (
    //     itinerary?.id == number
    // ))


    return (
        <>
            {itinerary &&
                <div>
                    < EditItineraryModal itinerary={itinerary} />
                    <div className="itinerary-page__outer-container">
                        <p>Title: {itinerary?.title}</p>
                        <p>Trip Start: {itinerary?.start_date}</p>
                        <p>Trip End: {itinerary?.end_date}</p>
                        <p>Banner: {itinerary?.image_url}</p>
                        <p>Notes: {itinerary?.notes}</p>

                        {/* <p>Airline: {itinerary?.flight_info[0]?.airline}</p> */}
                        {itinerary?.flight_info?.map(flight => {
                            return (
                                <p>
                                    Airline: {flight.airline}
                                </p>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}
