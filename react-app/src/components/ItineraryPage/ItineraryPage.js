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
                        {/* Itinerary */}
                        <div className="general-info__outer-container">
                            <p>Title: {itinerary?.title}</p>
                            <p>Trip Start: {itinerary?.start_date}</p>
                            <p>Trip End: {itinerary?.end_date}</p>
                            <p>Banner: {itinerary?.image_url}</p>
                            <p>Notes: {itinerary?.notes}</p>
                        </div>
                        {/* <p>Airline: {itinerary?.flight_info[0]?.airline}</p> */}
                        {/* Flights */}
                        <div className="flight-info__outer-container">
                            {itinerary?.flight_info?.map(flight => {
                                return (
                                    <>
                                        <p>Flight Information</p>
                                        <p>Date of Travel: {flight.date}</p>
                                        <p>Airline: {flight.airline}</p>
                                        <p>Flight #: {flight.flight_no}</p>
                                        <p>Origin: {flight.origin}</p>
                                        <p>Departure Time: {flight.departure}</p>
                                        <p>Destination: {flight.destination}</p>
                                        <p>Arrival Time: {flight.arrival}</p>
                                        <p>Flight Notes: {flight.notes}</p>
                                    </>
                                )
                            })}
                        </div>
                        <div className="hotel-info__outer-container">
                            {itinerary?.hotel_info?.map(hotel => {
                                return (
                                    <>
                                        <p>Hotel Information</p>
                                        <p>Property: {hotel.property}</p>
                                        <p>Address: {hotel.address}</p>
                                        <p>City: {hotel.city}</p>
                                        <p>State: {hotel.state}</p>
                                        <p>Zipcode: {hotel.zipcode}</p>
                                        <p>notes: {hotel.notes}</p>
                                    </>
                                )
                            })}
                        </div>
                        {/* <div className="rentalcar-info__outer-container">
                            {itinerary?.rental_info?.map(car => {
                                return (
                                    <>
                                        <p>Rental Car Information</p>
                                        <p>Rental Company: {car.company}</p>
                                        <p>Address: {car.address}</p>
                                        <p>City: {car.city}</p>
                                        <p>Zipcode: {car.zipcode}</p>
                                        <p>Confirmation: {car.confirmation}</p>
                                        <p>Pick Up: {car.pickup_date}</p>
                                        <p>Pick Up Time: {car.pickup_time}</p>
                                        <p>Drop Off: {car.dropoff_date}</p>
                                        <p>Drop Off Time: {car.dropoff_time}</p>
                                        <p>Notes: {car.notes}</p>
                                    </>
                                )
                            })}
                        </div> */}
                    </div>
                </div>
            }
        </>
    )
}
