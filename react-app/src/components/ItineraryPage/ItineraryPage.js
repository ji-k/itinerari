import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function Profile({ number }) {


    const itineraries = Object.values(useSelector(state => state.itineraries))
    const itinerary = itineraries.filter(itinerary => (
        itinerary.id == number
    ))

    return (
        <>
            <p>{itinerary[0].title}</p>
            < p > Selected Itinerary will go here!</ p>
            <p>Selected Itinerary will go here!</p>
            <p>Selected Itinerary will go here!</p>
            <p>Selected Itinerary will go here!</p>
            <p>Selected Itinerary will go here!</p>
            <p>Selected Itinerary will go here!</p>
            <p>Selected Itinerary will go here!</p>
            <p>Selected Itinerary will go here!</p>
        </>
    )
}
