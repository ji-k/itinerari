import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import EditItineraryModal from '../EditItineraryModal';
import CreateFlightModal from '../CreateFlightModal';
import './ItineraryPage.css'
import * as ItineraryActions from '../../store/itineraries'

export default function ItineraryPage({ number }) {
    const itineraries = useSelector(state => state.itineraries)
    // const itineraries = Object.values(useSelector(state => state.itineraries))
    const itinerary = itineraries[number]
    // const itinerary = itineraries.filter(itinerary => (
    //     itinerary?.id == number
    // ))
    const itinerary_id = itinerary?.id

    const dispatch = useDispatch()

    const deleteFlight = async (e, flightId) => {
        e.preventDefault();
        const res = await fetch(`/api/flights/${flightId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (res.ok) {
            const data = await res.json();
            await dispatch(ItineraryActions.getItinerary(itinerary_id));
            // setShowModal(false)
            return 'success';
        }
    }



    return (
        <>
            {itinerary &&
                <div>
                    <div className="itinerary-banner-container">
                        <img src={itinerary?.image_url} className="itinerary-banner" />
                    </div>
                    <div className="itinerary-page__outer-container">
                        < EditItineraryModal itinerary={itinerary} />
                        < CreateFlightModal itinerary_id={itinerary_id} />
                        {/* ************* Itinerary ************* */}
                        <div className="general-info__outer-container">
                            <div className="general-info__title">{itinerary?.title}</div>
                            <div className="general-info__sDate">Trip Start: {itinerary?.start_date}</div>
                            <div className="general-info__eDate">Trip End: {itinerary?.end_date}</div>
                            <div className="general-info__notes">Notes: {itinerary?.notes}</div>
                            {/* <p className="">Banner: {itinerary?.image_url}</p> */}
                        </div>
                        {/* ************* Flights ************* */}
                        <div className="flight-info__outer-container">
                            {itinerary?.flight_info?.map((flight, i) => {
                                return (
                                    <div key={i}>
                                        <p>Flight Information</p>
                                        <p>Date of Travel: {flight.date}</p>
                                        <p>Airline: {flight.airline}</p>
                                        <p>Flight #: {flight.flight_no}</p>
                                        <p>Origin: {flight.origin}</p>
                                        <p>Departure Time: {flight.departure}</p>
                                        <p>Destination: {flight.destination}</p>
                                        <p>Arrival Time: {flight.arrival}</p>
                                        <p>Flight Notes: {flight.notes}</p>
                                        <button
                                            className="itinerary-delete"
                                            onClick={e => deleteFlight(e, flight?.id)}>Delete Flight
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                        {/* ************* Hotels ************* */}
                        <div className="hotel-info__outer-container">
                            {itinerary?.hotel_info?.map((hotel, i) => {
                                return (
                                    <div key={i}>
                                        <p>Hotel Information</p>
                                        <p>Property: {hotel.property}</p>
                                        <p>Address: {hotel.address}</p>
                                        <p>City: {hotel.city}</p>
                                        <p>State: {hotel.state}</p>
                                        <p>Zipcode: {hotel.zipcode}</p>
                                        <p>notes: {hotel.notes}</p>
                                    </div>
                                )
                            })}
                        </div>
                        {/* ************* Rental Cars ************* */}
                        <div className="rentalcar-info__outer-container">
                            {itinerary?.rental_info?.map((car, i) => {
                                return (
                                    <div key={i}>
                                        <p>Rental Car Information</p>
                                        <p>Rental Company: {car.company}</p>
                                        <p>Address: {car.address}</p>
                                        <p>City: {car.city}</p>
                                        <p>State: {car.state}</p>
                                        <p>Zipcode: {car.zipcode}</p>
                                        <p>Confirmation: {car.confirmation}</p>
                                        <p>Pick Up: {car.pickup_date}</p>
                                        <p>Pick Up Time: {car.pickup_time}</p>
                                        <p>Drop Off: {car.dropoff_date}</p>
                                        <p>Drop Off Time: {car.dropoff_time}</p>
                                        <p>Notes: {car.notes}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
