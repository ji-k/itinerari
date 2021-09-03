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
            await res.json();
            await dispatch(ItineraryActions.getItinerary(itinerary_id));
            // setShowModal(false)
            return 'success';
        }
    }

    // const convertTime = (time) => {
    //     time = time.slice(1);  // Remove full string match value
    //     time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    //     time[0] = +time[0] % 12 || 12; // Adjust hours
    //     return time.join('');
    // }



    return (
        <>
            {itinerary &&
                <div>
                    <div className="itinerary-banner-container">
                        <img src={itinerary?.image_url} className="itinerary-banner" alt="user selects a banner for their itinerary" />
                    </div>
                    <div className="itinerary-page__outer-container">
                        <div className="itinerary-button-div">
                            < EditItineraryModal itinerary={itinerary} />
                            < CreateFlightModal itinerary_id={itinerary_id} />
                        </div>
                        {/* ************* Itinerary ************* */}
                        <div className="general-info__title">{itinerary?.title}</div>
                        <div className="general-info__outer-container">
                            <div className="general-info__date">
                                Trip Dates: {(new Date(itinerary?.start_date).toDateString())} - {(new Date(itinerary?.end_date).toDateString())}
                            </div>
                            {/* <div className="general-info__sDate">Trip Start: {itinerary?.start_date}</div>
                            <div className="general-info__eDate">Trip End: {itinerary?.end_date}</div> */}
                            <div className="general-info__notes">Notes: {itinerary?.notes}</div>
                            {/* <p className="">Banner: {itinerary?.image_url}</p> */}
                        </div>
                        {/* ************* Flights ************* */}
                        <div className="flight-info__outer-container">
                            {itinerary?.flight_info?.map((flight, i) => {
                                return (
                                    <div key={i}>
                                        <div className="flight-header-button-flex">
                                            <span className="feature-header">Flight Information</span>
                                            <button
                                                className="itinerary-delete dashboard-button"
                                                onClick={e => deleteFlight(e, flight?.id)}>Delete Flight
                                            </button>
                                        </div>
                                        <div className="feature-content__container">
                                            <div className="flight-row-1">
                                                <div className="flight-airport">{flight.origin} ➤ {flight.destination}</div>
                                                <div className="flight-date">Date of Travel: {(new Date(flight.date).toDateString())}</div>
                                            </div>
                                            <div className="flight-row-2">
                                                <div>{flight.airline}</div>
                                                <div className="flight-no">{flight.flight_no}</div>
                                            </div>
                                            {/* <p>Origin: {flight.origin}</p> */}
                                            <div className="flight-time__container">
                                                <div className="flight-departure__container">
                                                    <div className="flight-time">{flight.departure}</div>
                                                    {/* <div className="flight-time">{((flight.departure).toString().convertTime())}</div> */}
                                                    <div className="flight-time-label">Departure Time</div>
                                                </div>
                                                <div className="flight-arrival__container">
                                                    <div className="flight-time">{flight.arrival}</div>
                                                    <div className="flight-time-label">Arrival Time</div>
                                                </div>
                                            </div>
                                            {/* <p>Departure Time: {flight.departure}</p> */}
                                            {/* <p>Destination: {flight.destination}</p> */}
                                            {/* <p>Arrival Time: {flight.arrival}</p> */}
                                            <div className="flight-notes">Flight Notes: {flight.notes}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* ************* Hotels ************* */}
                        {/* <div className="hotel-info__outer-container">
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
                        </div> */}
                        {/* ************* Rental Cars ************* */}
                        {/* <div className="rentalcar-info__outer-container">
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
                        </div> */}
                    </div>
                </div>
            }
        </>
    )
}
