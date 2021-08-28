import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import './ItineraryPage.css'

export default function Profile({ number }) {


    const itineraries = Object.values(useSelector(state => state.itineraries))
    const itinerary = itineraries.filter(itinerary => (
        itinerary.id == number
    ))

    return (
        <>
            <div className="itinerary-page__outer-container">
                <p>Title: {itinerary[0].title}</p>
                <p>Trip Start: {itinerary[0].start_date}</p>
                <p>Trip End: {itinerary[0].end_date}</p>
                <p>Banner: {itinerary[0].image_url}</p>
                <p>Notes: {itinerary[0].notes}</p>
            </div>
        </>
    )
}
